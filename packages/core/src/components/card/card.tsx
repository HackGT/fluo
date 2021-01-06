import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-card",
  styleUrl: "card.scss",
  shadow: true,
})
export class Card {

  render() {
    return (
      <div class="card">
        <slot></slot>
      </div>
    );
  }

}
