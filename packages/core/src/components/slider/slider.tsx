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
  @Prop() value = 50;

  @Prop() min = 0;

  @Prop() max = 100;

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
          <span
            class="bar"
            style={{
              backgroundColor: `${this.disabled ? "#E6E6E6" : "#e8e4ff"}`,
            }}
          >
            <span
              class="fill"
              ref={(el) => (this.fillRef = el as HTMLSpanElement)}
              style={{
                width: `${
                  ((+this.value - this.min) * 100) / (this.max - this.min)
                }%`,
                backgroundColor: `${this.disabled ? "#858585" : "#7b69ec"}`,
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
            disabled={this.disabled}
          />
        </div>
      </div>
    );
  }
}
