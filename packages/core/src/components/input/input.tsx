import { Element, Component, Prop, Host, h } from "@stencil/core";
import { Rule } from "../../utils/utils";

@Component({
  tag: "fl-input",
  styleUrl: "input.scss",
  shadow: true,
})
export class Input {
  input: HTMLInputElement;
  @Element() host: HTMLFlInputElement;

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
  @Prop({ mutable: true }) errors: string[] = [];
  @Prop({ mutable: true }) validity: ValidityState;

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { validity, validationMessage } = this.input;
    this.validity = validity;

    this.errors = [
      validationMessage,
      ...this.rules
        .filter((rule) => !rule.validate(this.host))
        .map((rule) => rule.errorMessage),
    ].filter((msg) => msg.length > 0);
  }

  render() {
    return (
      <Host>
        <span>
          <slot name="left-icon"></slot>
          <input
            ref={(e) => (this.input = e)}
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
            onChange={this.handleChange}
          />
          <slot name="right-icon"></slot>
        </span>
        <span class="error-msg">
          {
            <ul>
              {this.errors.map((msg) => (
                <li>{msg}</li>
              ))}
            </ul>
          }
        </span>
      </Host>
    );
  }
}
