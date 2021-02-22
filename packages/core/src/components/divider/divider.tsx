import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-divider",
  styleUrl: "divider.scss",
  shadow: true
})
export class Divider {
  /** The orientation of the divider */
  @Prop() orientation : "vertical" | "horizontal" = "horizontal";

  render() {
    return (
      <Host
        class={{
          vertical: this.orientation === "vertical"
        }}
      >
        { this.orientation === "horizontal" ?
          <hr />
          : "|"
        }
      </Host>
    );
  }
}
