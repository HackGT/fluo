import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-card-footer",
  styleUrl: "card-footer.scss",
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
