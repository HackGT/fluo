import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-card-footer",
  styleUrl: "card-footer.scss",
  shadow: true,
})
export class CardFooter {

  render() {
    return (
      <div class="card-footer">
        <slot></slot>
      </div>
    );
  }

}
