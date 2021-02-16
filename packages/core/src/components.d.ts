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
}
declare global {
    interface HTMLFlButtonElement extends Components.FlButton, HTMLStencilElement {
    }
    var HTMLFlButtonElement: {
        prototype: HTMLFlButtonElement;
        new (): HTMLFlButtonElement;
    };
    interface HTMLFlLinkElement extends Components.FlLink, HTMLStencilElement {
    }
    var HTMLFlLinkElement: {
        prototype: HTMLFlLinkElement;
        new (): HTMLFlLinkElement;
    };
    interface HTMLElementTagNameMap {
        "fl-button": HTMLFlButtonElement;
        "fl-link": HTMLFlLinkElement;
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
    interface IntrinsicElements {
        "fl-button": FlButton;
        "fl-link": FlLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-link": LocalJSX.FlLink & JSXBase.HTMLAttributes<HTMLFlLinkElement>;
        }
    }
}
