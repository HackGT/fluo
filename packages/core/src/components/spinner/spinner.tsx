import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "spinner.scss",
  shadow: true,
})
export class Spinner {
  @Prop() size: "small" | "medium" | "large" = "medium";

  render() {
    return (
      <Host>
        <div class="spinner"></div>
      </Host>
    );
  }
}
