import { Host, Component, Prop, h } from "@stencil/core";
import { DownArrow } from "./icons";

@Component({
  tag: "fl-details",
  styleUrl: "detail.scss",
  shadow: true,
})
export class Detail {
  @Prop() opened: boolean = false;

  @Prop() disabled: boolean = false;

  @Prop() heading: string = "";

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
