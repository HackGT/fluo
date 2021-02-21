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
    interface FlCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "indeterminate": boolean;
        "name": string;
        "value": string;
    }
    interface FlItem {
        /**
          * Determines if the item has a menu
         */
        "hasMenu": boolean;
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
    interface HTMLFlSwitchElement extends Components.FlSwitch, HTMLStencilElement {
    }
    var HTMLFlSwitchElement: {
        prototype: HTMLFlSwitchElement;
        new (): HTMLFlSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "fl-button": HTMLFlButtonElement;
        "fl-checkbox": HTMLFlCheckboxElement;
        "fl-item": HTMLFlItemElement;
        "fl-menu": HTMLFlMenuElement;
        "fl-switch": HTMLFlSwitchElement;
    }
}
declare namespace LocalJSX {
    interface FlButton {
    }
    interface FlCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "indeterminate"?: boolean;
        "name"?: string;
        "value"?: string;
    }
    interface FlItem {
        /**
          * Determines if the item has a menu
         */
        "hasMenu"?: boolean;
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
        "fl-item": FlItem;
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
            "fl-item": LocalJSX.FlItem & JSXBase.HTMLAttributes<HTMLFlItemElement>;
            "fl-menu": LocalJSX.FlMenu & JSXBase.HTMLAttributes<HTMLFlMenuElement>;
            "fl-switch": LocalJSX.FlSwitch & JSXBase.HTMLAttributes<HTMLFlSwitchElement>;
        }
    }
}
