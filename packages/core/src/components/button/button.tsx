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

  // Button Tag Properties

  /** The button's type. Ignored when `href` is set. */
  @Prop() type?: "submit" | "reset" | "button";

  /** An optional name for the button. Ignored when `href` is set. */
  @Prop() name: string;

  /** An optional value for the button. Ignored when `href` is set. */
  @Prop() value: string;

  // Anchor Tag Properties

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target?: "_blank" | "_parent" | "_self" | "_top";

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @Prop() download?: string;

  /** Specifies the relationship of the target object to the link object. Only used when `href` is set. */
  @Prop() rel?: string;

  render() {
    const TagType = this.href ? "a" : "button";

    const isButton = TagType == "button";
    const isLink = TagType == "a";

    return (
      <TagType
        class={{
          button: true,
          [`button--${this.variant}`]: true,
          [`button--${this.size}`]: true,
          "button--disabled": this.disabled,
          "button--loading": this.loading
        }}

        disabled={isButton ? this.disabled : undefined}
        type={isButton ? this.type : undefined}
        name={isButton ? this.name : undefined}
        value={isButton ? this.value : undefined}

        href={isLink ? this.href : undefined}
        target={isLink ? this.target : undefined}
        download={isLink ? this.download : undefined}
        rel={isLink ? this.rel : undefined}
      >
        <span part="icon" class="button__icon">
          <slot name="icon"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
      </TagType>
    );
  }

}
