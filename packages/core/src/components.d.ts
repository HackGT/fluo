/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Rule } from "./utils/utils";
export namespace Components {
    interface FlAlert {
        "body"?: string;
        "closed"?: boolean;
        "fixed": boolean;
        "heading"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading": boolean;
        "variant": "success" | "info" | "error" | "warning";
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
          * Button name, used in forms
         */
        "name"?: string;
        /**
          * Button size
         */
        "size": "normal" | "large";
        /**
          * Button function
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * Button value, used in forms
         */
        "value"?: string;
        /**
          * Button variant
         */
        "variant": "primary" | "secondary" | "success" | "warning" | "danger";
    }
    interface FlCard {
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
        "collapsed": boolean;
    }
    interface FlLink {
        /**
          * Render the link as a button
         */
        "button": boolean;
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
          * Specifies the relationship of the target object to the link object.
         */
        "rel"?: string;
        /**
          * The link's size
         */
        "size": "normal" | "large";
        /**
          * Tells the browser where to open the link.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
          * The link's type
         */
        "variant": "primary" | "secondary" | "success" | "warning" | "danger";
    }
    interface FlList {
        "float": boolean;
        "items": HTMLFlItemElement[];
    }
    interface FlModal {
        /**
          * Some functionality attached to the modal aside from closing
         */
        "action": (...args: any[]) => any;
        /**
          * Text to display on the primary button
         */
        "actionText": string;
        /**
          * The title to be displayed in the modal. "Title" creates a conflict.
         */
        "header": string;
        /**
          * Displays modal if state is true, otherwise no render
         */
        "open": boolean;
        /**
          * Optional additional functionality attached to the modal
         */
        "secondary"?: (...args: any[]) => any;
        /**
          * Optional text to display on the secondary button. Recommended if secondary is passed
         */
        "secondaryText"?: string;
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
        "handleRemove": (event: MouseEvent) => void;
        "removable": boolean;
        "text": string;
    }
    interface FlTextarea {
        "errors": string[];
        "rules": Rule[];
        "validity": ValidityState;
    }
    interface FlTooltip {
    }
    interface FlUpload {
        "files": File[];
    }
}
declare global {
    interface HTMLFlAlertElement extends Components.FlAlert, HTMLStencilElement {
    }
    var HTMLFlAlertElement: {
        prototype: HTMLFlAlertElement;
        new (): HTMLFlAlertElement;
    };
    interface HTMLFlButtonElement extends Components.FlButton, HTMLStencilElement {
    }
    var HTMLFlButtonElement: {
        prototype: HTMLFlButtonElement;
        new (): HTMLFlButtonElement;
    };
    interface HTMLFlCardElement extends Components.FlCard, HTMLStencilElement {
    }
    var HTMLFlCardElement: {
        prototype: HTMLFlCardElement;
        new (): HTMLFlCardElement;
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
    interface HTMLFlListElement extends Components.FlList, HTMLStencilElement {
    }
    var HTMLFlListElement: {
        prototype: HTMLFlListElement;
        new (): HTMLFlListElement;
    };
    interface HTMLFlModalElement extends Components.FlModal, HTMLStencilElement {
    }
    var HTMLFlModalElement: {
        prototype: HTMLFlModalElement;
        new (): HTMLFlModalElement;
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
    interface HTMLFlTextareaElement extends Components.FlTextarea, HTMLStencilElement {
    }
    var HTMLFlTextareaElement: {
        prototype: HTMLFlTextareaElement;
        new (): HTMLFlTextareaElement;
    };
    interface HTMLFlTooltipElement extends Components.FlTooltip, HTMLStencilElement {
    }
    var HTMLFlTooltipElement: {
        prototype: HTMLFlTooltipElement;
        new (): HTMLFlTooltipElement;
    };
    interface HTMLFlUploadElement extends Components.FlUpload, HTMLStencilElement {
    }
    var HTMLFlUploadElement: {
        prototype: HTMLFlUploadElement;
        new (): HTMLFlUploadElement;
    };
    interface HTMLElementTagNameMap {
        "fl-alert": HTMLFlAlertElement;
        "fl-button": HTMLFlButtonElement;
        "fl-card": HTMLFlCardElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-input": HTMLFlInputElement;
        "fl-item": HTMLFlItemElement;
        "fl-link": HTMLFlLinkElement;
        "fl-list": HTMLFlListElement;
        "fl-modal": HTMLFlModalElement;
        "fl-switch": HTMLFlSwitchElement;
        "fl-tag": HTMLFlTagElement;
        "fl-textarea": HTMLFlTextareaElement;
        "fl-tooltip": HTMLFlTooltipElement;
        "fl-upload": HTMLFlUploadElement;
    }
}
declare namespace LocalJSX {
    interface FlAlert {
        "body"?: string;
        "closed"?: boolean;
        "fixed"?: boolean;
        "heading"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading"?: boolean;
        "variant"?: "success" | "info" | "error" | "warning";
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
          * Button name, used in forms
         */
        "name"?: string;
        /**
          * Button size
         */
        "size"?: "normal" | "large";
        /**
          * Button function
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * Button value, used in forms
         */
        "value"?: string;
        /**
          * Button variant
         */
        "variant"?: "primary" | "secondary" | "success" | "warning" | "danger";
    }
    interface FlCard {
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
        "collapsed"?: boolean;
    }
    interface FlLink {
        /**
          * Render the link as a button
         */
        "button"?: boolean;
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
          * Specifies the relationship of the target object to the link object.
         */
        "rel"?: string;
        /**
          * The link's size
         */
        "size"?: "normal" | "large";
        /**
          * Tells the browser where to open the link.
         */
        "target"?: "_blank" | "_parent" | "_self" | "_top";
        /**
          * The link's type
         */
        "variant"?: "primary" | "secondary" | "success" | "warning" | "danger";
    }
    interface FlList {
        "float"?: boolean;
        "items"?: HTMLFlItemElement[];
    }
    interface FlModal {
        /**
          * Some functionality attached to the modal aside from closing
         */
        "action"?: (...args: any[]) => any;
        /**
          * Text to display on the primary button
         */
        "actionText"?: string;
        /**
          * The title to be displayed in the modal. "Title" creates a conflict.
         */
        "header"?: string;
        /**
          * Displays modal if state is true, otherwise no render
         */
        "open"?: boolean;
        /**
          * Optional additional functionality attached to the modal
         */
        "secondary"?: (...args: any[]) => any;
        /**
          * Optional text to display on the secondary button. Recommended if secondary is passed
         */
        "secondaryText"?: string;
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
        "handleRemove"?: (event: MouseEvent) => void;
        "removable"?: boolean;
        "text"?: string;
    }
    interface FlTextarea {
        "errors"?: string[];
        "rules"?: Rule[];
        "validity"?: ValidityState;
    }
    interface FlTooltip {
    }
    interface FlUpload {
        "files"?: File[];
    }
    interface IntrinsicElements {
        "fl-alert": FlAlert;
        "fl-button": FlButton;
        "fl-card": FlCard;
        "fl-checkbox": FlCheckbox;
        "fl-input": FlInput;
        "fl-item": FlItem;
        "fl-link": FlLink;
        "fl-list": FlList;
        "fl-modal": FlModal;
        "fl-switch": FlSwitch;
        "fl-tag": FlTag;
        "fl-textarea": FlTextarea;
        "fl-tooltip": FlTooltip;
        "fl-upload": FlUpload;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-alert": LocalJSX.FlAlert & JSXBase.HTMLAttributes<HTMLFlAlertElement>;
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-card": LocalJSX.FlCard & JSXBase.HTMLAttributes<HTMLFlCardElement>;
            "fl-checkbox": LocalJSX.FlCheckbox & JSXBase.HTMLAttributes<HTMLFlCheckboxElement>;
            "fl-input": LocalJSX.FlInput & JSXBase.HTMLAttributes<HTMLFlInputElement>;
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
            "fl-list": LocalJSX.FlList & JSXBase.HTMLAttributes<HTMLFlListElement>;
            "fl-modal": LocalJSX.FlModal & JSXBase.HTMLAttributes<HTMLFlModalElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
            "fl-tag": LocalJSX.FlTag & JSXBase.HTMLAttributes<HTMLFlTagElement>;
            "fl-textarea": LocalJSX.FlTextarea & JSXBase.HTMLAttributes<HTMLFlTextareaElement>;
            "fl-tooltip": LocalJSX.FlTooltip & JSXBase.HTMLAttributes<HTMLFlTooltipElement>;
            "fl-upload": LocalJSX.FlUpload & JSXBase.HTMLAttributes<HTMLFlUploadElement>;
        }
    }
}
