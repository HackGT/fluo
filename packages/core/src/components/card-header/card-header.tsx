import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-card-header",
  styleUrl: "card-header.scss",
  shadow: true,
})
export class Card {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
