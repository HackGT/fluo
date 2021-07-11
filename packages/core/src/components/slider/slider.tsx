import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-slider",
  styleUrl: "slider.scss",
  shadow: true,
})
export class Slider {
  constructor() {
    this.sliderBar = this.sliderBar.bind(this);
  }
  @Prop() value: number;

  @Prop() min: number;

  @Prop() max: number;

  @Prop() disabled: boolean;

  private sliderRef?: HTMLInputElement;
  private fillRef?: HTMLSpanElement;

  sliderBar() {
    this.fillRef.style.width =
      ((+this.sliderRef.value - this.min) * 100) / (this.max - this.min) + "%";
  }

  render() {
    return (
      <div class="middle">
        <div class="slider-container">
          <span class="bar">
            <span
              class="fill"
              ref={(el) => (this.fillRef = el as HTMLSpanElement)}
              style={{
                width: `${
                  ((+this.value - this.min) * 100) / (this.max - this.min)
                }%`,
              }}
            ></span>
          </span>
          <input
            id="slider"
            class="slider"
            type="range"
            min={this.min}
            max={this.max}
            value={this.value}
            ref={(el) => (this.sliderRef = el as HTMLInputElement)}
            onInput={this.sliderBar}
          />
        </div>
      </div>
    );
  }
}
