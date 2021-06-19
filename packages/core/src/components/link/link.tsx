import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-link",
  styleUrl: "link.scss",
  shadow: true
})
export class Link {
  /** The link's type */
  @Prop({ reflect: true }) variant: "primary" | "secondary" | "success" | "warning" | "danger" = "primary";

  /** The link's size */
  @Prop({ reflect: true }) size: "normal" | "large";
  
  /** Render the link as a button */
  @Prop({ reflect: true}) button = false;

  /** Set to true to disable the link. */
  @Prop({ reflect: true }) disabled = false;

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
        href={this.href}
        target={this.target}
        download={this.download}
        rel={this.rel}
      >
        <slot/>
      </a>
    );
  }

}
