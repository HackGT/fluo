import { Component, Host, h, Prop, Element } from "@stencil/core";
import { btypes, positions } from "./btypes";

@Component({
  tag: "fl-badge",
  styleUrl: "fl-badge.scss",
  shadow: true,
})
export class FlBadge {

@Prop() type: btypes = btypes.PRIMARY;

@Prop() pill = false;

@Prop() position: positions = positions.NONE;

// Speed of spinner in seconds
@Prop() speed = 2;

/* stylelint-disable */
@Element() private element: HTMLFlBadgeElement;
/* stylelint-enable */

componentWillLoad() {
  this.element.parentElement.style.position = "relative";
  // Just ensures some default type is set for badge
  if (!Object.values(btypes).includes(this.type)) {
    this.type = btypes.PRIMARY;
  }
  this.element.style.setProperty("--speed", this.speed.toString().concat("s"));
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
