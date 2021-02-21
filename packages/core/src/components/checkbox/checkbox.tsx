import { Component, Prop, Host, h } from "@stencil/core";


@Component({
  tag: "fl-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})
export class Checkbox {
  @Prop name: string;
  @Prop value: string;
  @Prop({ reflect: true}) checked = false;
  @Prop({ reflect: true}) disabled = false;
  @Prop({ reflect: true}) indeterminate = false;

  render() {
    // nesting input inside label and using a slot to capture label text
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    return (
      <Host>
        <label>
          <input 
            type="checkbox"
            name={this.name}
            value={this.value}
            disabled={this.disabled} 
            checked={this.checked}
            indeterminate={this.indeterminate}
          />
          <span part="label">
            <slot/>
          </span>
        </label>
      </Host>
    )
  }
}



