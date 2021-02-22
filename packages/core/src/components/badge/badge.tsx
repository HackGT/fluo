import { Component, Host, h, Prop, Element } from "@stencil/core";
import { btypes, positions } from "./btypes";

@Component({
  tag: "fl-badge",
  styleUrl: "badge.scss",
  shadow: true,
})
export class FlBadge {

  /** The badge type */
  @Prop() type: btypes = btypes.PRIMARY;

  /** The optional badge pill shape */
  @Prop() pill = false;

  /** The badge optional position */
  @Prop() position: positions = positions.NONE;

  /* stylelint-disable */
  @Element() private element: HTMLFlBadgeElement;
  /* stylelint-enable */

  componentWillLoad() {
    this.element.parentElement.style.position = "relative";
    // Just ensures some default type is set for badge
    if (!Object.values(btypes).includes(this.type)) {
      this.type = btypes.PRIMARY;
    }
  }
  render() {
    return (
      <Host
        class={{
          "badge": true,
          [`badge--${this.type}`]: true,
          [`badge--${this.position}`]: true,
          "badge-pill": this.pill,
        }}> {!this.element.innerHTML ? this.type : null}
        <slot></slot>
      </Host>
    );
  }
}
