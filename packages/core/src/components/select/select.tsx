import { Component, h, Prop, Method, State, Element, Watch } from "@stencil/core";

@Component({
  tag: "fl-select",
  styleUrl: "select.scss",
  shadow: true
})
export class Select {
  isVisible = false;
  container: HTMLElement;
  content: HTMLElement;
  display: HTMLElement;

  @Element() host: HTMLFlSelectElement;

  @State() hasFocus = false;

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

  /** The select's size. */
  @Prop() size: "small" | "medium" | "large" = "medium";

  /** The value of the control. This will be a string or an array depending on `multiple`. */
  @Prop({ mutable: true }) value: string | Array<string> = "Value";

  /** The select's label. Alternatively, you can use the label slot. */
  @Prop() label = "";

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = "";

  /** The select's required attribute. */
  @Prop() required = false;

  /** Set to true to add a clear button when the select is populated. */
  @Prop() clearable = false;

  /** Closes dropdown when an item is selected. Only applies when multiple is false. */
  @Prop() closeOnSelect = true;

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
  

  /** Shows the dropdown content */
  @Method()
  async  show() {
    // Prevent subsequent calls to the method
    if (this.isVisible) {
      return;
    }

    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);

    this.isVisible = true;
    this.open = true;

    this.content.classList.remove("hidden");
  }

  /** Hides the dropdown content */
  

  /** Hides the dropdown content */
  @Method()
  async  hide() {
    // Prevent subsequent calls to the method
    if (!this.isVisible) {
      return;
    }

    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);

    this.isVisible = false;
    this.open = false;

    this.content.classList.add("hidden");
    this.container.focus();
  }

  getItems = () => {
    return Array.from(this.host.querySelectorAll("fl-select-item"));
  }

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
  }

  handleDisplayClick = () => {
    this.open ? this.hide() : this.show();
  }

  handleOnKeyDown = (event: KeyboardEvent) => {
    const items = this.getItems();
    const activeItem: HTMLFlSelectItemElement = items.find(item => item === document.activeElement);

    if (event.key === "Escape") {
      this.hide();
      this.display.focus();
      return;
    }

    if (event.key === "Enter") {
      if (activeItem) {
        this.updateValue(activeItem);
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
        let index = items.indexOf(activeItem);

        if (index == undefined) {
          index = 0;
        } else if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }

        // Wrap index around options
        if (index < 0) {
          index = items.length - 1;
        } else if (index > items.length - 1) {
          index = 0;
        }

        items[index].setFocus();
      }
    }
  }

  handleContentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() === "fl-select-item") {
      this.updateValue(event.target as HTMLFlSelectItemElement);
    }
  }

  handleDocumentKeyDown = (event: KeyboardEvent) => {
    // Close dropdown when escape is pressed
    if (event.key === "Escape") {
      this.hide();
      this.display.focus();
    }
  }

  handleDocumentMouseDown = (event: KeyboardEvent) => {
    // Close when clicking outside containing element
    const path = event.composedPath() as Array<EventTarget>;
    if (!path.includes(this.container)) {
      this.hide();
    }
  }

  syncItemsFromValue() {
    // const items = this.getItems();
    // const value = this.getValueAsArray();

    // Sync checked states
    // items.map(item => (item.checked = value.includes(item.value)));

    // // Sync display label
    // if (this.multiple) {
    //   const checkedItems = [];
    //   value.map(val => items.map(item => (item.value === val ? checkedItems.push(item) : null)));

    //   this.displayTags = checkedItems.map(item => {
    //     return (
    //       <sl-tag
    //         exportparts="base:tag"
    //         type="info"
    //         size={this.size}
    //         pill={this.pill}
    //         clearable
    //         onClick={this.handleTagInteraction}
    //         onKeyDown={this.handleTagInteraction}
    //         onSl-clear={event => {
    //           event.stopPropagation();
    //           if (!this.disabled) {
    //             item.checked = false;
    //             this.syncValueFromItems();
    //           }
    //         }}
    //       >
    //         {this.getItemLabel(item)}
    //       </sl-tag>
    //     );
    //   });

    //   if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
    //     const total = this.displayTags.length;
    //     this.displayLabel = '';
    //     this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
    //     this.displayTags.push(
    //       <sl-tag exportparts="base:tag" type="info" size={this.size}>
    //         +{total - this.maxTagsVisible}
    //       </sl-tag>
    //     );
    //   }
    // } else {
    //   const checkedItem = items.filter(item => item.value === value[0])[0];
    //   this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : '';
    //   this.displayTags = [];
    // }
  }

  syncValueFromItems() {
    const items = this.getItems();
    const checkedItems = items.filter(item => item.checked);
    const checkedValues = checkedItems.map(item => item.value);

    if (this.multiple) {
      this.value = (this.value as []).filter(val => checkedValues.includes(val));
    } else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : "";
    }
  }

  render() {
    return (
      <div
        class={{
          select: true,
          [`select--${this.size}`]: true,
          "select--focused": this.hasFocus
        }}
        onKeyDown={this.handleOnKeyDown}
        ref={el => this.container = el}
        tabIndex={this.disabled ? -1 : 0}
        onFocus={() => this.hasFocus = true}
        onBlur={() => this.hasFocus = false}
      >
        <div
          class="select__display"
          onClick={this.handleDisplayClick}
          ref={el => this.display = el}
        >
          {typeof this.value == "string" ? this.value : this.value.join(" ")}
        </div>
        <div
          class="select__content hidden"
          onClick={this.handleContentClick}
          ref={el => this.content = el}
        >
          <slot></slot>
        </div>
      </div>
    );
  }

}
