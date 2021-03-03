import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "fl-spinner.scss",
  shadow: true,
})
export class FlSpinner {

// Modifies transparancy of spinner
@Prop() transparent = false;

render() {
  return (
    <Host
      class={{
        "fl-spinner": true,
        "fl-spinner--transparent": this.transparent,
      }}
    >
      <slot></slot>
    </Host>
  );
}

}
