import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "fl-spinner.scss",
  shadow: true,
})
export class FlSpinner {

/** An optional transparancy boolean for spinner*/
@Prop() transparant = false;

/** The spinners color */
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
