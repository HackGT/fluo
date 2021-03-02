import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "fl-spinner.scss",
  shadow: true,
})
export class FlSpinner {

@Prop() transparent = false;

@Prop() color;

render() {
  return (
    <Host
      class={{
        "fl-spinner": true,
        "fl-spinner--transparent": this.transparent,
        "fl-spinner--colors": this.color
      }}
    >
      <slot></slot>
    </Host>
  );
}

}
