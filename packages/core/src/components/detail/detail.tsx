import { Host, Component, Prop, h } from "@stencil/core";
import { DownArrow } from "./icons";

@Component({
  tag: "fl-details",
  styleUrl: "detail.scss",
  shadow: true,
})
export class Detail {
  /** Opens the detail if set to true */
  @Prop() opened = false;

  /** Disables the detail if set to true */
  @Prop() disabled = false;

  /** `heading` of the detail */
  @Prop() heading = "";

  handleOnOpen = () => {
    this.opened = !this.opened;
  };

  render() {
    return (
      <Host>
        <div
          class={{
            detail: true,
            "detail--opened": this.opened,
            "detail--disabled": this.disabled,
          }}
          onClick={this.handleOnOpen}
        >
          <h3 class="heading">{this.heading}</h3>
          <div
            class={{
              icon: true,
              "icon--opened": this.opened,
            }}
          >
            <DownArrow />
          </div>
        </div>
        <div
          class={{
            "text-container": true,
            "text-container--opened": this.opened,
            "text-container--closed": !this.opened,
            "text-container--disabled": this.disabled,
          }}
        >
          <p
            class={{
              text: true,
              "text--opened": this.opened,
            }}
          >
            <slot></slot>
          </p>
        </div>
      </Host>
    );
  }
}
