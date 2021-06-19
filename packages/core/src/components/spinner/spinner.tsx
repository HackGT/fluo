import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "fl-spinner",
  styleUrl: "spinner.scss",
  shadow: true,
})
export class Spinner {
  @Prop() size: "sm" | "md" | "lg" = "md";

  render() {
    return (
      <Host>
        <div class="spinner"></div>
      </Host>
    );
  }
}
