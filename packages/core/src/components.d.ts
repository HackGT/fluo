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
        "pill": boolean;
        "position": positions;
        "speed": number;
        "type": btypes;
    }
    interface FlButton {
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
    interface FlItem {
        /**
          * Boolean attribute used internally to check if an item has a nested menu
         */
        "hasMenu": boolean;
    }
    interface FlMenu {
    }
    interface FlSpinner {
        "color": any;
        "transparent": boolean;
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
    interface HTMLFlItemElement extends Components.FlItem, HTMLStencilElement {
    }
    var HTMLFlItemElement: {
        prototype: HTMLFlItemElement;
        new (): HTMLFlItemElement;
    };
    interface HTMLFlMenuElement extends Components.FlMenu, HTMLStencilElement {
    }
    var HTMLFlMenuElement: {
        prototype: HTMLFlMenuElement;
        new (): HTMLFlMenuElement;
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
    interface HTMLElementTagNameMap {
        "fl-badge": HTMLFlBadgeElement;
        "fl-button": HTMLFlButtonElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-item": HTMLFlItemElement;
        "fl-menu": HTMLFlMenuElement;
        "fl-spinner": HTMLFlSpinnerElement;
        "fl-switch": HTMLFlSwitchElement;
    }
}
declare namespace LocalJSX {
    interface FlBadge {
        "pill"?: boolean;
        "position"?: positions;
        "speed"?: number;
        "type"?: btypes;
    }
    interface FlButton {
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
    interface FlItem {
        /**
          * Boolean attribute used internally to check if an item has a nested menu
         */
        "hasMenu"?: boolean;
    }
    interface FlMenu {
        /**
          * Emits event when item is clicked
         */
        "onFl-select"?: (event: CustomEvent<{ item: HTMLFlItemElement }>) => void;
    }
    interface FlSpinner {
        "color"?: any;
        "transparent"?: boolean;
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
        "fl-badge": FlBadge;
        "fl-button": FlButton;
        "fl-checkbox": FlCheckbox;
        "fl-item": FlItem;
        "fl-menu": FlMenu;
        "fl-spinner": FlSpinner;
        "fl-switch": FlSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-badge": LocalJSX.FlBadge & JSXBase.HTMLAttributes<HTMLFlBadgeElement>;
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-checkbox": LocalJSX.FlCheckbox & JSXBase.HTMLAttributes<HTMLFlCheckboxElement>;
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-menu": LocalJSX.FlMenu & JSXBase.HTMLAttributes<HTMLFlMenuElement>;
            "fl-spinner": LocalJSX.FlSpinner & JSXBase.HTMLAttributes<HTMLFlSpinnerElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
        }
    }
}
