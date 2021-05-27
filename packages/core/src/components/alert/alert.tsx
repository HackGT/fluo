import { Component, h, Prop, Host } from "@stencil/core";
import { atypes } from "./atypes";

@Component({
  tag: "fl-alert",
  styleUrl: "alert.scss",
  shadow: true,
})
export class Alert {
  /** The link's type */
  @Prop({ reflect: true }) type: atypes = atypes.INFO;

  @Prop() body?: string;

  @Prop() heading?: string;

  @Prop() duration?: number = 500;

  @Prop() fixed: boolean = false;

  @Prop() closed?: boolean = false;

  /** Set to true to draw the link in a loading state. */
  @Prop({ reflect: true }) loading = false;

  handleOnClose = () => {
    this.closed = true;
  };

  check = "✅";

  render() {
    return (
      <Host
        class={{
          alert: true,
          [`alert--${this.type}`]: true,
          "alert--closed": this.closed,
          "alert--fixed": this.fixed,
        }}
      >
        <p class="icon">{this.check}</p>
        <h3 class="heading">{this.heading}</h3>
        <p class="body">
          <slot></slot>
        </p>
        <button onClick={this.handleOnClose} class="close">
          &#215;
        </button>
      </Host>
    );
  }
}
