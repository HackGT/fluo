import { Component, h, Host, Prop, Element } from "@stencil/core";
import { Rule } from "../../utils/utils";

@Component({
  tag: "fl-textarea",
  styleUrl: "textarea.scss",
  shadow: true,
})
export class Textarea {
  textarea: HTMLTextAreaElement;
  @Element() host: HTMLFlTextareaElement;
  
  // TODO: add textarea attributes

  // Validation
  @Prop() rules: Rule[] = [];
  @Prop({ mutable: true }) errors: string[] = [];
  @Prop({ mutable: true }) validity: ValidityState;

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { validity, validationMessage } = this.textarea;
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
          <textarea
            ref={(el) => (this.textarea = el)}
            onChange={this.handleChange}
          />
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
    )
  }
}
