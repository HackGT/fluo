import { Element, Component, Prop, Host, h, Method, State } from "@stencil/core";
import FormControl from "../../functional-components/form-control/form-control";
import { FormComponent } from "../../interfaces/FormComponent";
import { Rule } from "../../utils/utils";

let id = 0;

@Component({
  tag: "fl-input",
  styleUrl: "input.scss",
  shadow: true
})
export class Input implements FormComponent {
  inputId = `input-${++id}`;

  input: HTMLInputElement;
  @Element() host;

  @State() touched = false;

  @Prop() accept: string;
  @Prop() alt: string;
  @Prop() autocomplete: string;
  @Prop() autofocus: boolean;
  // @Prop() capture: boolean; // not sure about this one
  // @Prop() checked: boolean; // OMIT this in favor of <fl-checkbox>
  @Prop() disabled: boolean;

  // TODO insert attributes i don't quite understand yet

  @Prop() max: number;
  @Prop() maxlength: number;
  @Prop() min: number;
  @Prop() minlength: number;
  @Prop() multiple: boolean;
  @Prop() name: string;
  @Prop() pattern: string;
  @Prop() placeholder: string;
  @Prop() readonly: boolean;
  @Prop() required: boolean;
  @Prop() size: number;
  @Prop() src: string;
  @Prop() step: number;
  @Prop() type:
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  @Prop() value: string;
  @Prop() rules: Rule[] = [];
  @Prop() label?: string;
  @Prop({ mutable: true, reflect: true }) invalid = false;
  @Prop({ mutable: true }) errorMessage?: string;

  @Method()
  async reportValidity() {
    return this.checkValidity();
  }

  checkValidity = () => {
    const { validationMessage } = this.input;

    const errors = [
      validationMessage,
      ...this.rules.filter(rule => !rule.validate(this.value)).map(rule => rule.errorMessage)
    ].filter(msg => msg.length > 0);

    if (errors.length > 0) {
      this.errorMessage = errors[0];
      this.invalid = true;
      return false;
    }

    this.errorMessage = undefined;
    this.invalid = false;
    return true;
  };

  handleInput = () => {
    this.touched && this.checkValidity();
  };

  handleBlur = () => {
    this.touched = true;
    this.checkValidity();
  };

  render() {
    return (
      <Host>
        <FormControl inputId={this.inputId} label={this.label} errorMessage={this.errorMessage}>
          <slot name="left-icon"></slot>
          <input
            ref={el => (this.input = el)}
            class={{
              "input": true,
              "input--invalid": this.invalid
            }}
            accept={this.accept}
            alt={this.alt}
            autocomplete={this.autocomplete}
            autofocus={this.autofocus}
            disabled={this.disabled}
            max={this.max}
            maxlength={this.maxlength}
            min={this.min}
            minlength={this.minlength}
            multiple={this.multiple}
            name={this.name}
            pattern={this.pattern}
            placeholder={this.placeholder}
            readonly={this.readonly}
            required={this.required}
            size={this.size}
            src={this.src}
            step={this.step}
            type={this.type}
            value={this.value}
            onBlur={this.handleBlur}
            onInput={this.handleInput}
          />
          <slot name="right-icon"></slot>
        </FormControl>
      </Host>
    );
  }
}
