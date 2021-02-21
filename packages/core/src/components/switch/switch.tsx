import { Element, Component, Host, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "fl-switch",
  styleUrl: "switch.scss",
  shadow: true
})
export class Switch {
  input: HTMLInputElement;
  
  @Element() host : HTMLFlSwitchElement;

  /** `name` of the switch */
  @Prop() name: string;

  /** `value` of the switch */
  @Prop() value: string;

  /** Moves the switch to the on state if set to true */
  @Prop({ reflect: true }) on: boolean;

  /** Disables the switch */
  @Prop({ reflect: true }) disabled: boolean;
  

  @Watch("on")
  handleOnChange() {
    this.input.checked = this.on;

    // emit 'change' event
    const event = new Event("change");
    this.host.dispatchEvent(event);
  }

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
    );
  }
}
