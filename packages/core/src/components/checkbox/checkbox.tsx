import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "fl-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})
export class Checkbox {
  input: HTMLInputElement;

  /** Name of the checkbox */
  @Prop() name: string;

  /** The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on */
  @Prop() value: string;

  /** Puts the checkbox in the checked state */
  @Prop({ reflect: true }) checked = false;

  /** Disables the checkbox */
  @Prop({ reflect: true }) disabled = false;

  /** Puts the checkbox in a partially-checked state */
  @Prop({ reflect: true }) indeterminate = false;

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.checked = this.input.checked;
    this.indeterminate = false;
  }

  render() {
    // nesting input inside label and using a slot to capture label text
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    return (
      <Host
        onClick={this.handleClick}
      >
        <label>
          <div class="control">
            {this.checked && (
              <div
                part="checked-icon"
                class="checked"
              >
                &#10003;
              </div>
            )
            }

            {!this.checked && this.indeterminate && (
              <div
                part="indeterminate-icon"
                class="indeterminate"
              >
                -
              </div>
            )
            }


            <input
              ref={el => this.input = el}
              type="checkbox"
              name={this.name}
              value={this.value}
              disabled={this.disabled}
              checked={this.checked}
              indeterminate={this.indeterminate}
            />
          </div >
          <span part="label">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

