import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "fl-spinner.scss",
  shadow: true,
})
export class FlSpinner {

/** The badge optional position */
@Prop() transparant = false;

/** The badge optional position */
@Prop() color;

render() {
  return (
    <Host
      class={{
        "fl-spinner": true,
        "fl-spinner--transparant": this.transparant,
        "fl-spinner--colors": this.color
      }}
    >
      <slot></slot>
    </Host>
  );
}

}
