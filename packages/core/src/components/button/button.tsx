import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button {
  /** Button variant */
  @Prop({ reflect: true }) variant: "primary" | "secondary" | "success" | "warning" | "danger" = "primary";

  /** Button size */
  @Prop({ reflect: true }) size: "normal" | "large" = "normal"

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the button in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** Button function */
  @Prop({ reflect: true }) type?: "submit" | "reset" | "button";

  /** Button name, used in forms */
  @Prop({ reflect: true }) name?: string;

  /** Button value, used in forms */
  @Prop({ reflect: true }) value?: string;

  render() {
    return (
      <button
        disabled={this.disabled}
        type={this.type}
        name={this.name}
        value={this.value}
      >
        <span part="icon" class="button__icon">
          <slot name="icon"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
      </button>
    );
  }

}
