import { Component, Host, h, Prop, Element } from "@stencil/core";
import { stypes } from "./stypes";

@Component({
  tag: "fl-slider",
  styleUrl: "fl-slider.scss",
  shadow: true,
})

export class FlSlider {

// Lowest permitted slider value 
@Prop() min = 30;

// Largest permitted slider value
@Prop() max = 100;

// Step value for the range of slider
@Prop() step = 1;

// Slider Name
@Prop() name = "TEST";

// Orientation of slider which is limited to horizontal and vertical positions
@Prop() orient: stypes = stypes.HORIZONTAL;

// Disables slider
@Prop() disabled = false;

/* stylelint-disable */
@Element() private element: HTMLFlSliderElement;
/* stylelint-enable */  

//@Prop() tickFormatter = (val: number) => val.toString().concat("ts");

//@Prop tooltipFormatter = (val: number) => String;

componentDidLoad() {
  console.log("HERE");
  const test = this.element.shadowRoot.querySelector("input") as HTMLInputElement;
  test.addEventListener("input", function(e) {
    const thing = e.target as HTMLInputElement;
    console.log(thing.value);
  });

  test.addEventListener("change", function(e) {
    const thing = e.target as HTMLInputElement;
    console.log(thing.value);
  }); 
  //var tickFormat = this.tickFormatter(this.max).toString().split(this.max.toString())
  //console.log(this.tickFormatter(this.max));
  this.element.style.setProperty("--step", this.step.toString());
  this.element.style.setProperty("--max", this.max.toString());
  this.element.style.setProperty("--min", this.min.toString());
}

render() {
  return ( 
    <Host
      class={{
        "fl-slider--vert": this.orient === "vertical"
      }}
    > 
      {this.name}
      <div class="ticks">
        <input type="range" min={this.min} max={this.max} step={this.step} value="30"/>
      </div>
    </Host>
  );
}
}
