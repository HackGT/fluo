import { css } from "@microsoft/fast-element";
import {
    DesignSystemProvider,
    defineDesignSystemProvider,
    designSystemProperty,
    DesignSystemProviderTemplate as template
} from "@microsoft/fast-foundation";

@defineDesignSystemProvider({
    name: "fl-design-system-provider",
    template,
    styles: css`
        :host {
            display: block;
        }
    `
})
export class FluoDesignSystemProvider extends DesignSystemProvider {
    @designSystemProperty({
        default: "10%",
        cssCustomProperty: "padding-10"
    })
    public paddingTenPercent: string;
}
