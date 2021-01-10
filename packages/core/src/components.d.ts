/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FlButton {
    }
    interface FlForm {
        /**
          * Serializes all form controls elements and returns form data.
         */
        "getFormData": () => Promise<{}>;
        /**
          * Gets all form control elements two levels deep. Filters elements to only those in formControls.
         */
        "getFormElements": () => Promise<HTMLElement[]>;
        /**
          * Prevent the form from validating inputs before submitting.
         */
        "novalidate": boolean;
        /**
          * Resets the form
         */
        "reset": () => Promise<void>;
        /**
          * Submits the form. If all controls are valid, the `fl-submit` event will be emitted and the promise will resolve with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
         */
        "submit": () => Promise<boolean>;
    }
    interface FlFormControl {
        /**
          * The help text (if the help-text slot isn't used)
         */
        "helpText"?: string;
        /**
          * The help text id, used to map the input to the help text
         */
        "helpTextId"?: string;
        /**
          * The input id, used to map the input to the label
         */
        "inputId": string;
        /**
          * The label text (if the label slot isn't used)
         */
        "label"?: string;
        /**
          * The label id, used to map the label to the input
         */
        "labelId"?: string;
        /**
          * The size of the form control
         */
        "size": "small" | "medium" | "large";
    }
    interface FlSelect {
        /**
          * Set to true to add a clear button when the select is populated.
         */
        "clearable": boolean;
        /**
          * Closes dropdown when an item is selected. Only applies when multiple is false.
         */
        "closeOnSelect": boolean;
        /**
          * Set to true to disable the select control.
         */
        "disabled": boolean;
        /**
          * The select's help text. Alternatively, you can use the help-text slot.
         */
        "helpText": string;
        /**
          * Hides the dropdown content
         */
        "hide": () => Promise<void>;
        /**
          * The select's label. Alternatively, you can use the label slot.
         */
        "label": string;
        /**
          * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit.
         */
        "maxTagsVisible": number;
        /**
          * Set to true to enable multiselect.
         */
        "multiple": boolean;
        /**
          * The select's name.
         */
        "name": string;
        /**
          * Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.
         */
        "open": boolean;
        /**
          * The select's placeholder text.
         */
        "placeholder": string;
        /**
          * The select's required attribute.
         */
        "required": boolean;
        /**
          * Shows the dropdown content
         */
        "show": () => Promise<void>;
        /**
          * The select's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The value of the control. This will be a string or an array depending on `multiple`.
         */
        "value": string | Array<string>;
    }
    interface FlSelectItem {
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to draw the menu item in a disabled state.
         */
        "disabled": boolean;
        /**
          * Removes focus from the button.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the button.
         */
        "setFocus": (options?: FocusOptions) => Promise<void>;
        /**
          * A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
         */
        "value": string;
    }
    interface FlTag {
        /**
          * Set to true to make the tag clearable.
         */
        "clearable": boolean;
        /**
          * The tag's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The tag's type.
         */
        "type": "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
}
declare global {
    interface HTMLFlButtonElement extends Components.FlButton, HTMLStencilElement {
    }
    var HTMLFlButtonElement: {
        prototype: HTMLFlButtonElement;
        new (): HTMLFlButtonElement;
    };
    interface HTMLFlFormElement extends Components.FlForm, HTMLStencilElement {
    }
    var HTMLFlFormElement: {
        prototype: HTMLFlFormElement;
        new (): HTMLFlFormElement;
    };
    interface HTMLFlFormControlElement extends Components.FlFormControl, HTMLStencilElement {
    }
    var HTMLFlFormControlElement: {
        prototype: HTMLFlFormControlElement;
        new (): HTMLFlFormControlElement;
    };
    interface HTMLFlSelectElement extends Components.FlSelect, HTMLStencilElement {
    }
    var HTMLFlSelectElement: {
        prototype: HTMLFlSelectElement;
        new (): HTMLFlSelectElement;
    };
    interface HTMLFlSelectItemElement extends Components.FlSelectItem, HTMLStencilElement {
    }
    var HTMLFlSelectItemElement: {
        prototype: HTMLFlSelectItemElement;
        new (): HTMLFlSelectItemElement;
    };
    interface HTMLFlTagElement extends Components.FlTag, HTMLStencilElement {
    }
    var HTMLFlTagElement: {
        prototype: HTMLFlTagElement;
        new (): HTMLFlTagElement;
    };
    interface HTMLElementTagNameMap {
        "fl-button": HTMLFlButtonElement;
        "fl-form": HTMLFlFormElement;
        "fl-form-control": HTMLFlFormControlElement;
        "fl-select": HTMLFlSelectElement;
        "fl-select-item": HTMLFlSelectItemElement;
        "fl-tag": HTMLFlTagElement;
    }
}
declare namespace LocalJSX {
    interface FlButton {
    }
    interface FlForm {
        /**
          * Prevent the form from validating inputs before submitting.
         */
        "novalidate"?: boolean;
        /**
          * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional around the XHR request you use to submit the form's data with.
         */
        "onFl-submit"?: (event: CustomEvent<{ formData: any; formElements: HTMLElement[] }>) => void;
    }
    interface FlFormControl {
        /**
          * The help text (if the help-text slot isn't used)
         */
        "helpText"?: string;
        /**
          * The help text id, used to map the input to the help text
         */
        "helpTextId"?: string;
        /**
          * The input id, used to map the input to the label
         */
        "inputId"?: string;
        /**
          * The label text (if the label slot isn't used)
         */
        "label"?: string;
        /**
          * The label id, used to map the label to the input
         */
        "labelId"?: string;
        /**
          * The size of the form control
         */
        "size"?: "small" | "medium" | "large";
    }
    interface FlSelect {
        /**
          * Set to true to add a clear button when the select is populated.
         */
        "clearable"?: boolean;
        /**
          * Closes dropdown when an item is selected. Only applies when multiple is false.
         */
        "closeOnSelect"?: boolean;
        /**
          * Set to true to disable the select control.
         */
        "disabled"?: boolean;
        /**
          * The select's help text. Alternatively, you can use the help-text slot.
         */
        "helpText"?: string;
        /**
          * The select's label. Alternatively, you can use the label slot.
         */
        "label"?: string;
        /**
          * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit.
         */
        "maxTagsVisible"?: number;
        /**
          * Set to true to enable multiselect.
         */
        "multiple"?: boolean;
        /**
          * The select's name.
         */
        "name"?: string;
        /**
          * Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.
         */
        "open"?: boolean;
        /**
          * The select's placeholder text.
         */
        "placeholder"?: string;
        /**
          * The select's required attribute.
         */
        "required"?: boolean;
        /**
          * The select's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The value of the control. This will be a string or an array depending on `multiple`.
         */
        "value"?: string | Array<string>;
    }
    interface FlSelectItem {
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to draw the menu item in a disabled state.
         */
        "disabled"?: boolean;
        /**
          * A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
         */
        "value"?: string;
    }
    interface FlTag {
        /**
          * Set to true to make the tag clearable.
         */
        "clearable"?: boolean;
        /**
          * Emitted when the clear button is activated.
         */
        "onClear"?: (event: CustomEvent<any>) => void;
        /**
          * The tag's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The tag's type.
         */
        "type"?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
    interface IntrinsicElements {
        "fl-button": FlButton;
        "fl-form": FlForm;
        "fl-form-control": FlFormControl;
        "fl-select": FlSelect;
        "fl-select-item": FlSelectItem;
        "fl-tag": FlTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-form": LocalJSX.FlForm & JSXBase.HTMLAttributes<HTMLFlFormElement>;
            "fl-form-control": LocalJSX.FlFormControl & JSXBase.HTMLAttributes<HTMLFlFormControlElement>;
            "fl-select": LocalJSX.FlSelect & JSXBase.HTMLAttributes<HTMLFlSelectElement>;
            "fl-select-item": LocalJSX.FlSelectItem & JSXBase.HTMLAttributes<HTMLFlSelectItemElement>;
            "fl-tag": LocalJSX.FlTag & JSXBase.HTMLAttributes<HTMLFlTagElement>;
        }
    }
}
