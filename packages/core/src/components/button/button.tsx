import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button {

  /** The button's type */
  @Prop({ reflect: true }) variant: "default" | "primary" | "success" | "info" | "warning" | "danger" = "default";

  /** The button's size */
  @Prop({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the button in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** The button's type. Ignored when `href` is set. */
  @Prop() type?: "submit" | "reset" | "button";

  /** An optional name for the button. Ignored when `href` is set. */
  @Prop() name: string;

  /** An optional value for the button. Ignored when `href` is set. */
  @Prop() value: string;


  render() {
    return (
      <button
        class={{
          button: true,
          [`button--${this.variant}`]: true,
          [`button--${this.size}`]: true,
          "button--disabled": this.disabled,
          "button--loading": this.loading
        }}

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
