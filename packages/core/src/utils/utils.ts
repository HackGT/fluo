export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}

export interface Rule {
  name: string;
  validate: (value: any) => boolean;
  errorMessage: string;
}

export const REQUIRED_RULE: Rule = {
  name: "required",
  validate: value => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    const type = typeof value;
    if (type === "string" || type === "boolean") {
      return !!value;
    }
    if (typeof value === "number") {
      return value != null && value != undefined;
    }
  },
  errorMessage: "This field is required"
};
