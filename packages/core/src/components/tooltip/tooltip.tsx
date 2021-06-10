import { Host, Component, h } from "@stencil/core";

@Component({
  tag: "fl-tooltip",
  styleUrl: "tooltip.scss",
  shadow: true,
})
export class Tooltip {
  render() {
    return (
      <Host>
        <slot name="base"/>
        <slot name="content"/>
      </Host>
    )
  }
}
