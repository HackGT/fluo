import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-card-header",
  styleUrl: "card-header.scss",
  shadow: true,
})
export class CardHeader {

  render() {
    return (
      <div class="card-header">
        <slot></slot>
      </div>
    );
  }

}
