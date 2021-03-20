import { Component, Host, h, Prop} from "@stencil/core";
import { btypes, positions } from "./btypes";

@Component({
  tag: "fl-badge",
  styleUrl: "badge.scss",
  shadow: true,
})
export class Badge {

@Prop() type: btypes = btypes.PRIMARY;

@Prop() pill = false;

@Prop() position: positions = positions.NONE;

render() {
  return (
    <Host 
      class={{
        "badge": true,
        [`badge--${this.type}`]: true,
        [`badge--${this.position}`]: true,
        "badge-pill": this.pill,
      }}> 
      <slot></slot>
    </Host>
  );
}
}
