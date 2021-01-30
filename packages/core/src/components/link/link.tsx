import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-link",
  styleUrl: "link.scss",
  shadow: true
})
export class Link {

  /** The link's type */
  @Prop({ reflect: true }) variant: "default" | "primary" | "success" | "info" | "warning" | "danger" = "default";

  /** The link's size */
  @Prop({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Set to true to disable the link. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the link in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** The link for this link tag. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. */
  @Prop() target?: "_blank" | "_parent" | "_self" | "_top";

  /** Tells the browser to download the linked file as this filename. */
  @Prop() download?: string;

  /** Specifies the relationship of the target object to the link object. */
  @Prop() rel?: string;

  render() {
    return (
      <a
        class={{
          link: true,
          [`link--${this.variant}`]: true,
          [`link--${this.size}`]: true,
          "link--disabled": this.disabled,
          "link--loading": this.loading
        }}

        href={this.href}
        target={this.target}
        download={this.download}
        rel={this.rel}
      >
        <span part="icon" class="link__icon">
          <slot name="icon"></slot>
        </span>
        <span part="label" class="link__label">
          <slot></slot>
        </span>
      </a>
    );
  }

}
