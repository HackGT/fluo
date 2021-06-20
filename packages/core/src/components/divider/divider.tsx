import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-divider",
  styleUrl: "divider.scss",
  shadow: true
})
export class Divider {
  /** Style of divider line */
  @Prop() variant: "solid" | "dashed" | "dotted" | "inset" = "solid";
  
  render() {
    return (
      <div class={`divider divider__${this.variant}`}>
      </div>
    );
  }
}