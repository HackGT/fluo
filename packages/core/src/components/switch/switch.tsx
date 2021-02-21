import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-switch",
  styleUrl: "switch.scss",
  shadow: true
})
export class Switch {
  input: HTMLInputElement;
  @Prop() name: string;
  @Prop() value: string;
  @Prop({ reflect: true }) on: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.on = this.input.checked;
  }

  render() {
    return (
      <Host>
        <label>
          <div>
            <div 
              part="track"
              class={{
                "track-on": this.on
              }}
              >
              <span 
                part="thumb"
                class={{
                  "thumb-on": this.on
                }}
              ></span>
            </div>
            <input
              ref={e => this.input = e}
              type="checkbox"
              checked={this.on}
              disabled={this.disabled}
              name={this.name}
              value={this.value}
              onClick={this.handleClick}
            />
          </div>
          <span part="label">
            <slot />
          </span>
        </label>
      </Host>
    )
  }
}
