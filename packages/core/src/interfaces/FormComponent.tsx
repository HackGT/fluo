import { Rule } from "../utils/utils";

export interface FormComponent {
  // Private variable
  readonly inputId: string;

  // Props
  value: any;
  rules: Rule[];
  label?: string;
  invalid: boolean;
  helpText?: string;
  errorMessage?: string;

  // Methods
  reportValidity: () => Promise<boolean>;
}
