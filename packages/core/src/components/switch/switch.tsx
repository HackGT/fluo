import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-switch",
  styleUrl: "switch.scss",
  shadow: true
})
export class Switch {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    )
  }
}
