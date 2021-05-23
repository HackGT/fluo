import { Component, h, Prop, Host } from "@stencil/core";
import { atypes } from "./atypes";

@Component({
  tag: "fl-alert",
  styleUrl: "alert.scss",
  shadow: true,
})
export class Alert {
  /** The link's type */
  @Prop({ reflect: true }) type:
    | atypes.INFO
    | atypes.SUCCESS
    | atypes.WARNING
    | atypes.ERROR = atypes.INFO;

  @Prop() text?: string;

  @Prop() heading?: string;

  @Prop() duration?: number = 500;

  /** Set to true to draw the link in a loading state. */
  @Prop({ reflect: true }) loading = false;

  render() {
    return (
      <Host
        class={{
          alert: true,
          [`alert--${this.type}`]: true,
        }}
      >
        <slot></slot>
        <slot></slot>
      </Host>
    );
  }
}
