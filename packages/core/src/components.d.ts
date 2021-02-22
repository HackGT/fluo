/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { btypes, positions } from "./components/fl-badge/btypes";
export namespace Components {
    interface FlBadge {
        /**
          * The optional badge pill shape
         */
        "pill": boolean;
        /**
          * The badge optional position
         */
        "position": positions;
        /**
          * The badge type
         */
        "type": btypes;
    }
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
    interface FlCheckbox {
        /**
          * Puts the checkbox in the checked state
         */
        "checked": boolean;
        /**
          * Disables the checkbox
         */
        "disabled": boolean;
        /**
          * Puts the checkbox in a partially-checked state
         */
        "indeterminate": boolean;
        /**
          * Name of the checkbox
         */
        "name": string;
        /**
          * The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on
         */
        "value": string;
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
    interface FlItem {
        /**
          * Boolean attribute used internally to check if an item has a nested menu
         */
        "hasMenu": boolean;
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
    interface FlMenu {
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
    interface FlSpinner {
        /**
          * The spinners color
         */
        "color": any;
        /**
          * An optional transparancy boolean for spinner
         */
        "transparant": boolean;
    }
    interface FlSwitch {
        /**
          * Disables the switch
         */
        "disabled": boolean;
        /**
          * `name` of the switch
         */
        "name": string;
        /**
          * Moves the switch to the on state if set to true
         */
        "on": boolean;
        /**
          * `value` of the switch
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
    interface HTMLFlBadgeElement extends Components.FlBadge, HTMLStencilElement {
    }
    var HTMLFlBadgeElement: {
        prototype: HTMLFlBadgeElement;
        new (): HTMLFlBadgeElement;
    };
    interface HTMLFlButtonElement extends Components.FlButton, HTMLStencilElement {
    }
    var HTMLFlButtonElement: {
        prototype: HTMLFlButtonElement;
        new (): HTMLFlButtonElement;
    };
    interface HTMLFlCheckboxElement extends Components.FlCheckbox, HTMLStencilElement {
    }
    var HTMLFlCheckboxElement: {
        prototype: HTMLFlCheckboxElement;
        new (): HTMLFlCheckboxElement;
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
    interface HTMLFlItemElement extends Components.FlItem, HTMLStencilElement {
    }
    var HTMLFlItemElement: {
        prototype: HTMLFlItemElement;
        new (): HTMLFlItemElement;
    };
    interface HTMLFlLinkElement extends Components.FlLink, HTMLStencilElement {
    }
    var HTMLFlLinkElement: {
        prototype: HTMLFlLinkElement;
        new (): HTMLFlLinkElement;
    };
    interface HTMLFlMenuElement extends Components.FlMenu, HTMLStencilElement {
    }
    var HTMLFlMenuElement: {
        prototype: HTMLFlMenuElement;
        new (): HTMLFlMenuElement;
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
    interface HTMLFlSpinnerElement extends Components.FlSpinner, HTMLStencilElement {
    }
    var HTMLFlSpinnerElement: {
        prototype: HTMLFlSpinnerElement;
        new (): HTMLFlSpinnerElement;
    };
    interface HTMLFlSwitchElement extends Components.FlSwitch, HTMLStencilElement {
    }
    var HTMLFlSwitchElement: {
        prototype: HTMLFlSwitchElement;
        new (): HTMLFlSwitchElement;
    };
    interface HTMLFlTagElement extends Components.FlTag, HTMLStencilElement {
    }
    var HTMLFlTagElement: {
        prototype: HTMLFlTagElement;
        new (): HTMLFlTagElement;
    };
    interface HTMLElementTagNameMap {
        "fl-badge": HTMLFlBadgeElement;
        "fl-button": HTMLFlButtonElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-form": HTMLFlFormElement;
        "fl-form-control": HTMLFlFormControlElement;
        "fl-item": HTMLFlItemElement;
        "fl-link": HTMLFlLinkElement;
        "fl-menu": HTMLFlMenuElement;
        "fl-select": HTMLFlSelectElement;
        "fl-select-item": HTMLFlSelectItemElement;
        "fl-spinner": HTMLFlSpinnerElement;
        "fl-switch": HTMLFlSwitchElement;
        "fl-tag": HTMLFlTagElement;
    }
}
declare namespace LocalJSX {
    interface FlBadge {
        /**
          * The optional badge pill shape
         */
        "pill"?: boolean;
        /**
          * The badge optional position
         */
        "position"?: positions;
        /**
          * The badge type
         */
        "type"?: btypes;
    }
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
    interface FlCheckbox {
        /**
          * Puts the checkbox in the checked state
         */
        "checked"?: boolean;
        /**
          * Disables the checkbox
         */
        "disabled"?: boolean;
        /**
          * Puts the checkbox in a partially-checked state
         */
        "indeterminate"?: boolean;
        /**
          * Name of the checkbox
         */
        "name"?: string;
        /**
          * The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on
         */
        "value"?: string;
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
    interface FlItem {
        /**
          * Boolean attribute used internally to check if an item has a nested menu
         */
        "hasMenu"?: boolean;
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
    interface FlMenu {
        /**
          * Emits event when item is clicked
         */
        "onFl-select"?: (event: CustomEvent<{ item: HTMLFlItemElement }>) => void;
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
    interface FlSpinner {
        /**
          * The spinners color
         */
        "color"?: any;
        /**
          * An optional transparancy boolean for spinner
         */
        "transparant"?: boolean;
    }
    interface FlSwitch {
        /**
          * Disables the switch
         */
        "disabled"?: boolean;
        /**
          * `name` of the switch
         */
        "name"?: string;
        /**
          * Moves the switch to the on state if set to true
         */
        "on"?: boolean;
        /**
          * `value` of the switch
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
        "fl-badge": FlBadge;
        "fl-button": FlButton;
        "fl-checkbox": FlCheckbox;
        "fl-form": FlForm;
        "fl-form-control": FlFormControl;
        "fl-item": FlItem;
        "fl-link": FlLink;
        "fl-menu": FlMenu;
        "fl-select": FlSelect;
        "fl-select-item": FlSelectItem;
        "fl-spinner": FlSpinner;
        "fl-switch": FlSwitch;
        "fl-tag": FlTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-badge": LocalJSX.FlBadge & JSXBase.HTMLAttributes<HTMLFlBadgeElement>;
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-checkbox": LocalJSX.FlCheckbox & JSXBase.HTMLAttributes<HTMLFlCheckboxElement>;
            "fl-form": LocalJSX.FlForm & JSXBase.HTMLAttributes<HTMLFlFormElement>;
            "fl-form-control": LocalJSX.FlFormControl & JSXBase.HTMLAttributes<HTMLFlFormControlElement>;
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
            "fl-menu": LocalJSX.FlMenu & JSXBase.HTMLAttributes<HTMLFlMenuElement>;
            "fl-select": LocalJSX.FlSelect & JSXBase.HTMLAttributes<HTMLFlSelectElement>;
            "fl-select-item": LocalJSX.FlSelectItem & JSXBase.HTMLAttributes<HTMLFlSelectItemElement>;
            "fl-spinner": LocalJSX.FlSpinner & JSXBase.HTMLAttributes<HTMLFlSpinnerElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
            "fl-tag": LocalJSX.FlTag & JSXBase.HTMLAttributes<HTMLFlTagElement>;
        }
    }
}
