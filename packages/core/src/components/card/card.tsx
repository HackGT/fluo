import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-card",
  styleUrl: "card.scss",
  shadow: true
})
export class Card {
  render() {
    return (
      <div class="card">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <div class="content">
          <slot name="overline"></slot>
          <slot name="title"></slot>
          <slot name="body"></slot>
          <slot name="actions"></slot>
        </div>
      </div>
    )
  }
}
