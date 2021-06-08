import { Component, h } from "@stencil/core";

@Component({
  tag: "fl-list",
  styleUrl: "list.scss",
  shadow: true,
})
export class Tag {
    render() {
      return (
        <ul>
          <slot/>
        </ul>
      )
    }
}
