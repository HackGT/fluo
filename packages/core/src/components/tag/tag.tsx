import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "fl-tag",
  styleUrl: "tag.scss",
  shadow: true
})
export class Tag {
  tag: HTMLElement;

  /** The tag's type. */
  @Prop({ reflect: true }) type: "default" | "primary" | "success" | "info" | "warning" | "danger" | "text" = "default";

  /** The tag's size. */
  @Prop({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Set to true to make the tag clearable. */
  @Prop({ reflect: true }) clearable = false;

  /** Emitted when the clear button is activated. */
  @Event({ eventName: "clear" }) clear: EventEmitter;

  handleClearClick = () => {
    this.clear.emit();
  }

  render() {
    return (
      <span
        ref={el => (this.tag = el)}
        part="base"
        class={{
          tag: true,
          [`select--${this.type}`]: true,
          [`select--${this.size}`]: true
        }}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        {this.clearable && (
          <button part="clear" name="x" class="tag__clear" onClick={this.handleClearClick}>Clear</button>
        )}
      </span>
    );
  }
}
