/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { atypes } from "./components/alert/atypes";
import { btypes, positions } from "./components/badge/btypes";
import { Rule } from "./utils/utils";
export namespace Components {
    interface FlAlert {
        "body"?: string;
        "closed"?: boolean;
        "duration"?: number;
        "fixed": boolean;
        "heading"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading": boolean;
        /**
          * The link's type
         */
        "type": atypes;
    }
    interface FlBadge {
        "pill": boolean;
        "position": positions;
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
    interface FlCard {
    }
    interface FlCardBody {
    }
    interface FlCardCover {
    }
    interface FlCardFooter {
    }
    interface FlCardHeader {
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
    interface HTMLFlAlertElement extends Components.FlAlert, HTMLStencilElement {
    }
    var HTMLFlAlertElement: {
        prototype: HTMLFlAlertElement;
        new (): HTMLFlAlertElement;
    };
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
    interface HTMLFlCardElement extends Components.FlCard, HTMLStencilElement {
    }
    var HTMLFlCardElement: {
        prototype: HTMLFlCardElement;
        new (): HTMLFlCardElement;
    };
    interface HTMLFlCardBodyElement extends Components.FlCardBody, HTMLStencilElement {
    }
    var HTMLFlCardBodyElement: {
        prototype: HTMLFlCardBodyElement;
        new (): HTMLFlCardBodyElement;
    };
    interface HTMLFlCardCoverElement extends Components.FlCardCover, HTMLStencilElement {
    }
    var HTMLFlCardCoverElement: {
        prototype: HTMLFlCardCoverElement;
        new (): HTMLFlCardCoverElement;
    };
    interface HTMLFlCardFooterElement extends Components.FlCardFooter, HTMLStencilElement {
    }
    var HTMLFlCardFooterElement: {
        prototype: HTMLFlCardFooterElement;
        new (): HTMLFlCardFooterElement;
    };
    interface HTMLFlCardHeaderElement extends Components.FlCardHeader, HTMLStencilElement {
    }
    var HTMLFlCardHeaderElement: {
        prototype: HTMLFlCardHeaderElement;
        new (): HTMLFlCardHeaderElement;
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
        "fl-alert": HTMLFlAlertElement;
        "fl-badge": HTMLFlBadgeElement;
        "fl-button": HTMLFlButtonElement;
        "fl-card": HTMLFlCardElement;
        "fl-card-body": HTMLFlCardBodyElement;
        "fl-card-cover": HTMLFlCardCoverElement;
        "fl-card-footer": HTMLFlCardFooterElement;
        "fl-card-header": HTMLFlCardHeaderElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-input": HTMLFlInputElement;
        "fl-item": HTMLFlItemElement;
        "fl-link": HTMLFlLinkElement;
        "fl-menu": HTMLFlMenuElement;
        "fl-switch": HTMLFlSwitchElement;
    }
}
declare namespace LocalJSX {
    interface FlAlert {
        "body"?: string;
        "closed"?: boolean;
        "duration"?: number;
        "fixed"?: boolean;
        "heading"?: string;
        /**
          * Set to true to draw the link in a loading state.
         */
        "loading"?: boolean;
        /**
          * The link's type
         */
        "type"?: atypes;
    }
    interface FlBadge {
        "pill"?: boolean;
        "position"?: positions;
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
    interface FlCard {
    }
    interface FlCardBody {
    }
    interface FlCardCover {
    }
    interface FlCardFooter {
    }
    interface FlCardHeader {
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
        "fl-alert": FlAlert;
        "fl-badge": FlBadge;
        "fl-button": FlButton;
        "fl-card": FlCard;
        "fl-card-body": FlCardBody;
        "fl-card-cover": FlCardCover;
        "fl-card-footer": FlCardFooter;
        "fl-card-header": FlCardHeader;
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
            "fl-alert": LocalJSX.FlAlert & JSXBase.HTMLAttributes<HTMLFlAlertElement>;
            "fl-badge": LocalJSX.FlBadge & JSXBase.HTMLAttributes<HTMLFlBadgeElement>;
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-card": LocalJSX.FlCard & JSXBase.HTMLAttributes<HTMLFlCardElement>;
            "fl-card-body": LocalJSX.FlCardBody & JSXBase.HTMLAttributes<HTMLFlCardBodyElement>;
            "fl-card-cover": LocalJSX.FlCardCover & JSXBase.HTMLAttributes<HTMLFlCardCoverElement>;
            "fl-card-footer": LocalJSX.FlCardFooter & JSXBase.HTMLAttributes<HTMLFlCardFooterElement>;
            "fl-card-header": LocalJSX.FlCardHeader & JSXBase.HTMLAttributes<HTMLFlCardHeaderElement>;
            "fl-checkbox": LocalJSX.FlCheckbox & JSXBase.HTMLAttributes<HTMLFlCheckboxElement>;
            "fl-input": LocalJSX.FlInput & JSXBase.HTMLAttributes<HTMLFlInputElement>;
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
            "fl-menu": LocalJSX.FlMenu & JSXBase.HTMLAttributes<HTMLFlMenuElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
        }
    }
}
