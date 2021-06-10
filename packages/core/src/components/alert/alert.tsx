import { Component, h, Prop, Host } from "@stencil/core";
import {
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  InfoIcon,
  CloseIcon,
} from "./icons";

@Component({
  tag: "fl-alert",
  styleUrl: "alert.scss",
  shadow: true,
})
export class Alert {
  @Prop({ reflect: true }) variant: "success" | "info" | "error" | "warning" =
    "info";

  @Prop() body?: string;

  @Prop() heading?: string;

  @Prop() fixed = false;

  @Prop() closed?: boolean = false;

  /** Set to true to draw the link in a loading state. */
  @Prop({ reflect: true }) loading = false;

  icons = {
    success: <SuccessIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
  };

  handleOnClose = () => {
    this.closed = true;
  };

  render() {
    return (
      <Host
        id="alert"
        class={{
          alert: true,
          "closed": this.closed,
          "alert--fixed": this.fixed,
        }}
      >
        <p class="icon">{this.icons[this.variant]}</p>
        <h3 class="heading">{this.heading}</h3>
        <p class="body">
          <slot></slot>
        </p>
        <button onClick={this.handleOnClose} class="close">
          <CloseIcon />
        </button>
      </Host>
    );
  }
}
