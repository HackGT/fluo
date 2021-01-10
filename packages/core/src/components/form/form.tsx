import { Component, Event, EventEmitter, Method, Prop, h } from "@stencil/core";

interface FormControl {
  tag: string;
  serialize: (el: HTMLElement, formData: FormData) => void;
}

@Component({
  tag: "fl-form",
  styleUrl: "form.scss",
  shadow: true
})
export class Form {
  form: HTMLElement;
  formControls: FormControl[];

  /** Prevent the form from validating inputs before submitting. */
  @Prop() novalidate = false;

  /**
   * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an
   * invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this
   * event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional
   * around the XHR request you use to submit the form's data with.
   */
  @Event({ eventName: "fl-submit" }) flSubmit: EventEmitter<{ formData: FormData; formElements: HTMLElement[] }>;

  connectedCallback() {
    this.formControls = [
      {
        tag: "fl-select",
        serialize: (el: HTMLFlSelectElement, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.value];
              if (selectedOptions.length) {
                selectedOptions.map(value => formData.append(el.name, value));
              } else {
                formData.append(el.name, "");
              }
            } else {
              formData.append(el.name, el.value + "");
            }
          }
        }
      },
    ];
  }

  /** Serializes all form controls elements and returns a `FormData` object. */
  @Method()
  async getFormData() {
    const formData = new FormData();
    const formElements = await this.getFormElements();

    formElements.forEach(element => {
      const elementTag = element.tagName.toLowerCase();

      this.formControls.find(obj => obj.tag === elementTag).serialize(element, formData);
    });

    return formData;
  }

  /** Gets all form control elements two levels deep. Filters elements to only those in formControls. */
  @Method()
  async getFormElements() {
    const slot = this.form.querySelector("slot");
    const tags = this.formControls.map(control => control.tag);

    return slot
      .assignedElements({ flatten: true })
      .reduce((all, el) => all.concat(el, Array.from(el.querySelectorAll("*"))), [])
      .filter(el => tags.includes(el.tagName.toLowerCase())) as HTMLElement[];
  }

  /**
   * Submits the form. If all controls are valid, the `fl-submit` event will be emitted and the promise will resolve
   * with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
   */
  @Method()
  async submit() {
    console.log("Submittttt");
    const formData = await this.getFormData();
    const formElements = await this.getFormElements();

    if (!this.novalidate) {
      const formElementsThatReport = formElements.filter((el: any) => typeof el.reportValidity === "function") as any[];

      for (const element of formElementsThatReport) {
        const isValid = await element.reportValidity();

        if (!isValid) {
          return false;
        }
      }
    }

    this.flSubmit.emit({ formData, formElements });

    return true;
  }

  /**
   * Resets the form
   */
  @Method()
  async reset() {
    // TODO: Fill in reset form
    console.log("Reset");
  }

  handleClick = (event: MouseEvent) => {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();

    if (tag === "fl-button" || tag === "button") {
      const target = event.target as HTMLButtonElement;

      if (target.type === "submit") {
        this.submit();
      }
    }
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();

    if (tag === "fl-input" && event.key === "Enter" && !event.defaultPrevented) {
      this.submit();
    }
  }

  render() {
    return (
      <div
        ref={el => (this.form = el)}
        part="base"
        class="form"
        role="form"
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
      >
        <slot></slot>
      </div>
    );
  }
}
