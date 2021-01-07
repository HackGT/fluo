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
}
declare global {
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
    interface HTMLElementTagNameMap {
        "fl-button": HTMLFlButtonElement;
        "fl-card": HTMLFlCardElement;
        "fl-card-body": HTMLFlCardBodyElement;
        "fl-card-cover": HTMLFlCardCoverElement;
        "fl-card-footer": HTMLFlCardFooterElement;
        "fl-card-header": HTMLFlCardHeaderElement;
    }
}
declare namespace LocalJSX {
    interface FlButton {
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
    interface IntrinsicElements {
        "fl-button": FlButton;
        "fl-card": FlCard;
        "fl-card-body": FlCardBody;
        "fl-card-cover": FlCardCover;
        "fl-card-footer": FlCardFooter;
        "fl-card-header": FlCardHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fl-button": LocalJSX.FlButton & JSXBase.HTMLAttributes<HTMLFlButtonElement>;
            "fl-card": LocalJSX.FlCard & JSXBase.HTMLAttributes<HTMLFlCardElement>;
            "fl-card-body": LocalJSX.FlCardBody & JSXBase.HTMLAttributes<HTMLFlCardBodyElement>;
            "fl-card-cover": LocalJSX.FlCardCover & JSXBase.HTMLAttributes<HTMLFlCardCoverElement>;
            "fl-card-footer": LocalJSX.FlCardFooter & JSXBase.HTMLAttributes<HTMLFlCardFooterElement>;
            "fl-card-header": LocalJSX.FlCardHeader & JSXBase.HTMLAttributes<HTMLFlCardHeaderElement>;
        }
    }
}
