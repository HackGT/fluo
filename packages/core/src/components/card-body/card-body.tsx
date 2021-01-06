import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-card-body",
  styleUrl: "card-body.scss",
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
