import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-card-body",
  styleUrl: "card-body.scss",
  shadow: true,
})
export class CardBody {

  render() {
    return (
      <div class="card-body">
        <slot></slot>
      </div>
    );
  }

}
