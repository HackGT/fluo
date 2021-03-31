import { Component, Event, EventEmitter, Method, Prop, h } from "@stencil/core";

@Component({
  tag: "fl-form",
  styleUrl: "form.scss",
  shadow: true
})
export class Form {
  form: HTMLElement;
  formSerialize: { [key: string]: (el: HTMLElement, formData: any) => void };

  /** If true, the form from will not validate inputs before submitting */
  @Prop() novalidate = false;

  /**
   * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an invalid state, unless the form has the `novalidate` attribute.
   */
  @Event({ eventName: "fl-submit" }) flSubmit: EventEmitter<{
    formData: any;
    formElements: HTMLElement[];
  }>;

  connectedCallback() {
    this.formSerialize = {
      "fl-button": (el: HTMLFlButtonElement, formData) => {
        if (el.name && !el.disabled) {
          formData[el.name] = el.value;
        }
      },

      // 'fl-checkbox': (el: HTMLFlCheckboxElement, formData) => {
      //   if (el.name && !el.disabled && el.checked) {
      //     formData[el.name] = el.value;
      //   }
      // },

      // 'fl-color-picker': (el: HTMLFlCheckboxElement, formData) => {
      //   if (el.name && !el.disabled) {
      //     formData[el.name] = el.value;
      //   }
      // },

      // 'fl-input': (el: HTMLFlInputElement, formData) => {
      //   if (el.name && !el.disabled) {
      //     formData[el.name] = el.value;
      //   }
      // },

      // 'fl-radio': (el: HTMLFlRadioElement, formData) => {
      //   if (el.name && !el.disabled && el.checked) {
      //     formData[el.name] = el.value;
      //   }
      // },

      // 'fl-range': (el: HTMLFlRangeElement, formData) => {
      //   if (el.name && !el.disabled) {
      //     formData[el.name] = el.value;
      //   }
      // },

      "fl-select": (el: HTMLFlSelectElement, formData) => {
        if (el.name && !el.disabled) {
          formData[el.name] = el.value;
        }
      }

      // 'fl-switch': (el: HTMLFlSwitchElement, formData) => {
      //   if (el.name && !el.disabled && el.checked) {
      //     formData[el.name] = el.value;
      //   }
      // },

      // 'fl-textarea': (el: HTMLFlTextareaElement, formData) => {
      //   if (el.name && !el.disabled) {
      //     formData[el.name] = el.value;
      //   }
      // }
    };
  }

  /** Serializes all form controls elements and returns form data. */
  @Method()
  async getFormData() {
    const formElements = await this.getFormElements();
    const formData = {};

    formElements.forEach(el => {
      const tagName = el.tagName.toLowerCase();
      this.formSerialize[tagName](el, formData);
    });

    return formData;
  }

  /** Gets all form control elements two levels deep. Filters elements to only those in formControls. */
  @Method()
  async getFormElements() {
    const slot = this.form.querySelector("slot");
    const tags = Object.keys(this.formSerialize);

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
    const formData = await this.getFormData();
    const formElements = await this.getFormElements();

    if (!this.novalidate) {
      const formElementsThatReport = formElements.filter(
        (el: any) => typeof el.reportValidity === "function"
      ) as any[];

      let isValid = true;
      for (const element of formElementsThatReport) {
        isValid = isValid && (await element.reportValidity());
      }

      if (!isValid) {
        return false;
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
  };

  handleKeyUp = (event: KeyboardEvent) => {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();

    if (tag === "fl-input" && event.key === "Enter" && !event.defaultPrevented) {
      this.submit();
    }
  };

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
