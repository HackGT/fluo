import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-form-control",
  styleUrl: "form-control.scss",
  shadow: true
})
export class FormControl {
  /** The input id, used to map the input to the label */
  @Prop() inputId: string;

  /** The size of the form control */
  @Prop() size: "small" | "medium" | "large" = "medium";

  /** The label id, used to map the label to the input */
  @Prop() labelId?: string;

  /** The label text (if the label slot isn't used) */
  @Prop() label?: string;

  /** The help text id, used to map the input to the help text */
  @Prop() helpTextId?: string;

  /** The help text (if the help-text slot isn't used) */
  @Prop() helpText?: string;

  render() {
    return (
      <div
        part="base"
        class={{
          "form-control": true,
          [`form-control--${this.size}`]: true
        }}
      >
        {this.label &&
          <label
            part="label"
            id={this.labelId}
            class="form-control__label"
            htmlFor={this.inputId}
          >
            {this.label}
          </label>
        }

        <div part="input" class="form-control__input">
          <slot></slot>
        </div>

        {this.helpText &&
          <div
            part="help-text"
            id={this.helpTextId}
            class="form-control__help-text"
          >
            {this.helpText}
          </div>
        }
      </div >
    );
  }
}
