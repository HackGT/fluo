import { Component, h, Prop, State, Method } from "@stencil/core";

@Component({
  tag: "fl-select-item",
  styleUrl: "select-item.scss",
  shadow: true
})
export class SelectItem {
  selectItem: HTMLElement;

  @State() hasFocus = false;

  /** Set to true to draw the item in a checked state. */
  @Prop({ reflect: true }) checked = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @Prop({ reflect: true }) value = "";

  /** Set to true to draw the menu item in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /** Sets focus on the button. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.selectItem.focus(options);
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.selectItem.blur();
  }

  render() {
    return (
      <div
        ref={el => (this.selectItem = el)}
        part="base"
        class={{
          "select-item": true,
          "select-item--checked": this.checked,
          "select-item--disabled": this.disabled,
          "select-item--focused": this.hasFocus
        }}
        role="menuitem"
        aria-disabled={this.disabled ? "true" : "false"}
        aria-checked={this.checked ? "true" : "false"}
        tabIndex={!this.disabled ? 0 : null}
        onFocus={() => this.hasFocus = true}
        onBlur={() => this.hasFocus = false}
        onMouseEnter={() => this.setFocus()}
        onMouseLeave={() => this.removeFocus()}
      >
        {this.checked && "Checked"}
        <slot></slot>
      </div>
    );
  }

}
