/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Rule } from "./utils/utils";
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
    interface FlCheckbox {
        /**
          * Determines is checkbox is checked
         */
        "checked": boolean;
        /**
          * Determines if checkbox is disabled
         */
        "disabled": boolean;
        /**
          * Determines if checkbox is in indeterminate state
         */
        "indeterminate": boolean;
        /**
          * Name of checkbox
         */
        "name": string;
        /**
          * Value of checkbox
         */
        "value": string;
    }
    interface FlInput {
        "accept": string;
        "alt": string;
        "autocomplete": string;
        "autofocus": boolean;
        "disabled": boolean;
        "errors": string[];
        "max": number;
        "maxlength": number;
        "min": number;
        "minlength": number;
        "multiple": boolean;
        "name": string;
        "pattern": string;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "rules": Rule[];
        "size": number;
        "src": string;
        "step": number;
        "type": | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
        "validity": ValidityState;
        "value": string;
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
}
declare global {
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
    interface HTMLFlInputElement extends Components.FlInput, HTMLStencilElement {
    }
    var HTMLFlInputElement: {
        prototype: HTMLFlInputElement;
        new (): HTMLFlInputElement;
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
    interface HTMLFlSwitchElement extends Components.FlSwitch, HTMLStencilElement {
    }
    var HTMLFlSwitchElement: {
        prototype: HTMLFlSwitchElement;
        new (): HTMLFlSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "fl-button": HTMLFlButtonElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-input": HTMLFlInputElement;
        "fl-item": HTMLFlItemElement;
        "fl-link": HTMLFlLinkElement;
        "fl-menu": HTMLFlMenuElement;
        "fl-switch": HTMLFlSwitchElement;
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
    interface FlCheckbox {
        /**
          * Determines is checkbox is checked
         */
        "checked"?: boolean;
        /**
          * Determines if checkbox is disabled
         */
        "disabled"?: boolean;
        /**
          * Determines if checkbox is in indeterminate state
         */
        "indeterminate"?: boolean;
        /**
          * Name of checkbox
         */
        "name"?: string;
        /**
          * Value of checkbox
         */
        "value"?: string;
    }
    interface FlInput {
        "accept"?: string;
        "alt"?: string;
        "autocomplete"?: string;
        "autofocus"?: boolean;
        "disabled"?: boolean;
        "errors"?: string[];
        "max"?: number;
        "maxlength"?: number;
        "min"?: number;
        "minlength"?: number;
        "multiple"?: boolean;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "rules"?: Rule[];
        "size"?: number;
        "src"?: string;
        "step"?: number;
        "type"?: | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
        "validity"?: ValidityState;
        "value"?: string;
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
    interface IntrinsicElements {
        "fl-button": FlButton;
        "fl-checkbox": FlCheckbox;
        "fl-input": FlInput;
        "fl-item": FlItem;
        "fl-link": FlLink;
        "fl-menu": FlMenu;
        "fl-switch": FlSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-checkbox": LocalJSX.FlCheckbox & JSXBase.HTMLAttributes<HTMLFlCheckboxElement>;
            "fl-input": LocalJSX.FlInput & JSXBase.HTMLAttributes<HTMLFlInputElement>;
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
            "fl-menu": LocalJSX.FlMenu & JSXBase.HTMLAttributes<HTMLFlMenuElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
        }
    }
}
