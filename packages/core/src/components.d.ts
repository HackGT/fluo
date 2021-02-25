/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FlButton {
        /**
          * Set to true to disable the button.
         */
        "disabled": boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading": boolean;
        /**
          * An optional name for the button.
         */
        "name": string;
        /**
          * The button's size
         */
        "size": "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * An optional value for the button.
         */
        "value": string;
        /**
          * The button's type
         */
        "variant": "default" | "primary" | "success" | "warning" | "danger";
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
          * If true, the form from will not validate inputs before submitting
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
    }
    interface FlLink {
        /**
          * Set to true to disable the link.
         */
        "disabled": boolean;
        /**
          * Tells the browser to download the linked file as this filename.
         */
        "download"?: string;
        /**
          * The link for this link tag.
         */
        "href"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading": boolean;
        /**
          * Specifies the relationship of the target object to the link object.
         */
        "rel"?: string;
        /**
          * The link's size
         */
        "size": "small" | "medium" | "large";
        /**
          * Tells the browser where to open the link.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
          * The link's type
         */
        "variant": "default" | "primary" | "success" | "warning" | "danger";
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
          * Checks for validity and shows the browser's validation message if the control is invalid.
         */
        "reportValidity": () => Promise<boolean>;
        /**
          * The select's required attribute.
         */
        "required": boolean;
        /**
          * Shows the dropdown content
         */
        "show": () => Promise<void>;
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
          * Sets item as active (used when navigating via arrow keys).
         */
        "setActive": (value: boolean) => Promise<void>;
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
    interface HTMLFlLinkElement extends Components.FlLink, HTMLStencilElement {
    }
    var HTMLFlLinkElement: {
        prototype: HTMLFlLinkElement;
        new (): HTMLFlLinkElement;
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
        "fl-link": HTMLFlLinkElement;
        "fl-select": HTMLFlSelectElement;
        "fl-select-item": HTMLFlSelectItemElement;
        "fl-tag": HTMLFlTagElement;
    }
}
declare namespace LocalJSX {
    interface FlButton {
        /**
          * Set to true to disable the button.
         */
        "disabled"?: boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading"?: boolean;
        /**
          * An optional name for the button.
         */
        "name"?: string;
        /**
          * The button's size
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * An optional value for the button.
         */
        "value"?: string;
        /**
          * The button's type
         */
        "variant"?: "default" | "primary" | "success" | "warning" | "danger";
    }
    interface FlForm {
        /**
          * If true, the form from will not validate inputs before submitting
         */
        "novalidate"?: boolean;
        /**
          * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an invalid state, unless the form has the `novalidate` attribute.
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
    }
    interface FlLink {
        /**
          * Set to true to disable the link.
         */
        "disabled"?: boolean;
        /**
          * Tells the browser to download the linked file as this filename.
         */
        "download"?: string;
        /**
          * The link for this link tag.
         */
        "href"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading"?: boolean;
        /**
          * Specifies the relationship of the target object to the link object.
         */
        "rel"?: string;
        /**
          * The link's size
         */
        "size"?: "small" | "medium" | "large";
        /**
          * Tells the browser where to open the link.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
          * The link's type
         */
        "variant"?: "default" | "primary" | "success" | "warning" | "danger";
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
        "fl-link": FlLink;
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
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
            "fl-select": LocalJSX.FlSelect & JSXBase.HTMLAttributes<HTMLFlSelectElement>;
            "fl-select-item": LocalJSX.FlSelectItem & JSXBase.HTMLAttributes<HTMLFlSelectItemElement>;
            "fl-tag": LocalJSX.FlTag & JSXBase.HTMLAttributes<HTMLFlTagElement>;
        }
    }
}
