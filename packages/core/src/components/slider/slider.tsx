import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-slider",
  styleUrl: "slider.scss",
  shadow: true,
})
export class Slider {
  @Prop() value: number;

  @Prop() min: number;

  @Prop() max: number;

  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.value}
          class="slider"
        />
      </Host>
    );
  }
}
