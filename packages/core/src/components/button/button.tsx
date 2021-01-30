import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-button",
  styleUrl: "button.scss",
  shadow: true
})
export class Button {

  render() {
    return (
      <Host>
        <div>
            this is a big button
        </div>
      </Host>
    );
  }

}
