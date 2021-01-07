import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-card-cover",
  styleUrl: "card-cover.scss",
  shadow: true,
})
export class CardCover {

  render() {
    return (
      <div class="card-cover">
        <slot></slot>
      </div>
    );
  }

}
