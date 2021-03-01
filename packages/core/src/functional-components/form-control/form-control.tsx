import { h } from '@stencil/core';

export interface FormControlProps {
  /** The input id, used to map the input to the label */
  inputId: string;

  /** The label text (if the label slot isn't used) */
  label?: string;

  /** The help text for the input.  */
  helpText?: string;

  /** The error message for the input.  */
  errorText?: string;

  /** A function that gets called when the label is clicked. */
  onLabelClick?: (event: MouseEvent) => void;
}

const FormControl = (props: FormControlProps, children) => (
  <div class="form-control">
    {props.label &&
      <label
        class="form-control__label"
        htmlFor={props.inputId}
        onClick={props.onLabelClick}
      >
        {props.label}
      </label>
    }

    {children}

    {props.helpText &&
      <div class="form-control__help-text">
        {props.helpText}
      </div>
    }

    {props.errorText &&
      <div class="form-control__error-text">
        {props.errorText}
      </div>
    }
  </div>
);

export default FormControl;
