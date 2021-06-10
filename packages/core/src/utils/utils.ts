export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}

export interface Rule {
  name: string;
  validate: (e: HTMLFlInputElement | HTMLFlTextareaElement) => boolean;
  errorMessage: string;
}
