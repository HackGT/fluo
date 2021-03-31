import { Component, h, Prop, Method, State, Element, Watch } from "@stencil/core";
import FormControl from "../../functional-components/form-control/form-control";
import { FormComponent } from "../../interfaces/FormComponent";
import { getTextContent } from "../../utils/slot";
import { REQUIRED_RULE, Rule } from "../../utils/utils";

let id = 0;

@Component({
  tag: "fl-select",
  styleUrl: "select.scss",
  shadow: true
})
export class Select implements FormComponent {
  inputId = `select-${++id}`;

  isVisible = false;
  activeItem: number = undefined;
  container: HTMLElement;
  content: HTMLElement;
  display: HTMLElement;

  @Element() host: HTMLFlSelectElement;

  @State() touched = false;
  @State() displayLabel = "";
  @State() displayTags = [];

  /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Set to true to enable multiselect. */
  @Prop() multiple = false;

  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   */
  @Prop() maxTagsVisible = 3;

  /** Set to true to disable the select control. */
  @Prop() disabled = false;

  /** The select's name. */
  @Prop() name = "";

  /** The select's placeholder text. */
  @Prop() placeholder = "";

  /** The value of the control. This will be a string or an array depending on `multiple`. */
  @Prop({ mutable: true }) value: string | Array<string> = "";

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = "";

  /** The select's required attribute. */
  @Prop() required = false;

  /** Set to true to add a clear button when the select is populated. */
  @Prop() clearable = false;

  /** Closes dropdown when an item is selected. Only applies when multiple is false. */
  @Prop() closeOnSelect = true;

  @Prop() rules: Rule[] = [];
  /** The select's label. Alternatively, you can use the label slot. */
  @Prop() label?: string;
  @Prop({ mutable: true, reflect: true }) invalid = false;
  @Prop({ mutable: true }) errorMessage?: string;

  @Watch("multiple")
  handleMultipleChange() {
    // Cast to array | string based on `this.multiple`
    if (this.multiple && !Array.isArray(this.value)) {
      this.value = [this.value];
    } else if (!this.multiple && Array.isArray(this.value)) {
      this.value = this.value[0] || "";
    }

    this.syncItemsFromValue();
  }

  @Watch("value")
  handleValueChange() {
    // Resync items based on new value
    this.syncItemsFromValue();
  }

  @Watch("open")
  handleOpenChange() {
    // Open/close content based on new value
    this.open ? this.show() : this.hide();
  }

  /** Shows the dropdown content */
  @Method()
  async show() {
    // Prevent subsequent calls to the method
    if (this.isVisible) {
      return;
    }

    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);

    this.isVisible = true;
    this.open = true;
    this.activeItem = undefined;

    this.content.classList.remove("hidden");
  }

  /** Hides the dropdown content */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method
    if (!this.isVisible) {
      return;
    }

    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);

    this.isVisible = false;
    this.open = false;
    this.activeItem = undefined;

    this.content.classList.add("hidden");
    this.container.focus();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.checkValidity();
  }

  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this); // Necessary to define function before load
  }

  checkValidity = () => {
    const rules = this.rules;
    if (this.required) {
      rules.unshift(REQUIRED_RULE);
    }

    const errors = rules
      .filter(rule => !rule.validate(this.value))
      .map(rule => rule.errorMessage)
      .filter(msg => msg.length > 0);

    if (errors.length > 0) {
      this.errorMessage = errors[0];
      this.invalid = true;
      return false;
    }

    this.errorMessage = undefined;
    this.invalid = false;
    return true;
  };

  getItems = () => {
    return Array.from(this.host.querySelectorAll("fl-select-item"));
  };

  getItemLabel = (item: HTMLFlSelectItemElement) => {
    const slot = item.shadowRoot.querySelector("slot:not([name])") as HTMLSlotElement;
    return getTextContent(slot);
  };

  updateValue = (item: HTMLFlSelectItemElement) => {
    if (this.multiple) {
      this.value = this.value.includes(item.value)
        ? (this.value as []).filter(v => v !== item.value)
        : [...this.value, item.value];
    } else {
      this.value = item.value;
    }

    if (this.closeOnSelect && !this.multiple) {
      this.hide();
    }
    this.touched && this.checkValidity();
  };

  handleDisplayClick = () => {
    this.open ? this.hide() : this.show();
  };

  handleMouseOver = (event: MouseEvent) => {
    const items = this.getItems();
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() === "fl-select-item") {
      this.activeItem = items.indexOf(target as HTMLFlSelectItemElement);

      for (const item of items) {
        item.setActive(false);
      }
    }
  };

  handleOnKeyDown = (event: KeyboardEvent) => {
    const items = this.getItems();

    if (event.key === "Escape") {
      this.hide();
      this.display.focus();
      return;
    }

    if (event.key === "Enter") {
      if (this.activeItem !== undefined) {
        this.updateValue(items[this.activeItem]);
      } else {
        this.open ? this.hide() : this.show();
      }

      return;
    }

    // Tabbing out of the control closes it
    if (event.key === "Tab" && this.open) {
      this.hide();
      return;
    }

    // Up/down opens the menu
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      // Show the menu if it's not already open
      if (!this.open) {
        this.show();
      }

      if (items.length > 0) {
        event.preventDefault();

        if (event.key === "ArrowDown") {
          if (this.activeItem === undefined) {
            this.activeItem = 0;
          } else {
            this.activeItem++;
          }
        } else if (event.key === "ArrowUp") {
          if (this.activeItem === undefined) {
            this.activeItem = -1;
          } else {
            this.activeItem--;
          }
        } else if (event.key === "Home") {
          this.activeItem = 0;
        } else if (event.key === "End") {
          this.activeItem = items.length - 1;
        }

        // Wrap index around options
        if (this.activeItem < 0) {
          this.activeItem = items.length - 1;
        } else if (this.activeItem > items.length - 1) {
          this.activeItem = 0;
        }

        // Sets all items active state to false except current active item
        for (const item of items) {
          item.setActive(item === items[this.activeItem]);
        }
      }
    }
  };

  handleContentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() === "fl-select-item") {
      this.updateValue(event.target as HTMLFlSelectItemElement);
    }
  };

  handleDocumentKeyDown = (event: KeyboardEvent) => {
    // Close dropdown when escape is pressed
    if (event.key === "Escape") {
      this.hide();
      this.display.focus();
    }
  };

  handleDocumentMouseDown = (event: KeyboardEvent) => {
    // Close when clicking outside containing element
    const path = event.composedPath() as Array<EventTarget>;
    if (!path.includes(this.container)) {
      this.hide();
    }
  };

  handleTagInteraction = (event: KeyboardEvent | MouseEvent) => {
    // Don't toggle the menu when a tag's clear button is activated
    const path = event.composedPath() as Array<EventTarget>;
    const clearButton = path.find(el => {
      if (el instanceof HTMLElement) {
        const element = el as HTMLElement;
        return element.getAttribute("part") === "clear";
      }
    });

    if (clearButton) {
      event.stopPropagation();
    }
  };

  handleSlotChange = () => {
    this.syncItemsFromValue();
  };

  handleTagClear = (event: CustomEvent<any>, item: HTMLFlSelectItemElement) => {
    event.stopPropagation();
    if (!this.disabled) {
      item.checked = false;

      const items = this.getItems();
      const checkedItems = items.filter(item => item.checked);
      const checkedValues = checkedItems.map(item => item.value);

      if (this.multiple) {
        this.value = (this.value as []).filter(val => checkedValues.includes(val));
      } else {
        this.value = checkedValues.length > 0 ? checkedValues[0] : "";
      }
    }
  };

  handleBlur = () => {
    this.touched = true;
    this.checkValidity();
  };

  syncItemsFromValue = () => {
    const items = this.getItems();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Sync checked states
    items.map(item => (item.checked = value.includes(item.value)));

    // Sync display label
    if (this.multiple) {
      const checkedItems: HTMLFlSelectItemElement[] = [];
      value.map(val => items.map(item => (item.value === val ? checkedItems.push(item) : null)));

      this.displayTags = checkedItems.map(item => {
        return (
          <fl-tag
            exportparts="base:tag"
            type="info"
            clearable
            onClick={this.handleTagInteraction}
            onKeyDown={this.handleTagInteraction}
            onClear={event => this.handleTagClear(event, item)}
          >
            {this.getItemLabel(item)}
          </fl-tag>
        );
      });

      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        const total = this.displayTags.length;
        this.displayLabel = "";
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(
          <fl-tag exportparts="base:tag" type="info">
            +{total - this.maxTagsVisible}
          </fl-tag>
        );
      }
    } else {
      const checkedItem = items.filter(item => item.value === value[0])[0];
      this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : "";
      this.displayTags = [];
    }
  };

  render() {
    return (
      <FormControl inputId={this.inputId} label={this.label} errorMessage={this.errorMessage}>
        <div
          ref={el => (this.container = el)}
          class={{
            "select": true,
            "select--invalid": this.invalid
          }}
          onKeyDown={this.handleOnKeyDown}
          onMouseOver={this.handleMouseOver}
          onBlur={this.handleBlur}
          tabIndex={this.disabled ? -1 : 0}
        >
          <div
            class="select__display"
            onClick={this.handleDisplayClick}
            ref={el => (this.display = el)}
          >
            {this.displayTags.length ? (
              <span part="tags" class="select__tags">
                {this.displayTags}
              </span>
            ) : (
              this.displayLabel || this.placeholder
            )}
          </div>
          <div
            class="select__content hidden"
            onClick={this.handleContentClick}
            ref={el => (this.content = el)}
          >
            <slot onSlotchange={this.handleSlotChange}></slot>
          </div>
        </div>
      </FormControl>
    );
  }
}
