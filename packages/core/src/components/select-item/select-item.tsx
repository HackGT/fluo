import { Component, h, Prop, Method, State } from "@stencil/core";

@Component({
  tag: "fl-select-item",
  styleUrl: "select-item.scss",
  shadow: true
})
export class SelectItem {
  selectItem: HTMLElement;

  @State() active = false;

  /** Set to true to draw the item in a checked state. */
  @Prop({ reflect: true }) checked = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @Prop({ reflect: true }) value = "";

  /** Set to true to draw the menu item in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /** Sets item as active (used when navigating via arrow keys). */
  @Method()
  async setActive(value: boolean) {
    this.active = value;
  }

  handleMouseDown = (event: MouseEvent) => {
    // Prevents select item from gaining focus
    event.preventDefault();
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
          "select-item--active": this.active
        }}
        role="menuitem"
        aria-disabled={this.disabled ? "true" : "false"}
        aria-checked={this.checked ? "true" : "false"}
        tabIndex={this.disabled ? null : 0}
        onMouseDown={this.handleMouseDown}
      >
        {this.checked && "Checked"}
        <slot></slot>
      </div>
    );
  }
}
