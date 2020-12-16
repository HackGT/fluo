/**
 * Inspired from the <api-viewer> web component
 * https://api-viewer-element.netlify.app/#api-viewer
 *
 * Using custom-element definition given in ../schema.ts
 */

import {
    attr,
    observable,
    html,
    css,
    ref,
    repeat,
    when,
    FASTElement,
    customElement,
} from "@microsoft/fast-element";
import {
    CustomElement,
    Attribute,
    DataType,
    Slot,
    CssCustomProperty,
    CssPart
} from "../schema";

function renderBooleanKnob(x: Attribute) {
    return html`
        <input
            id=${x => x.name}
            type="checkbox"
            @change=${(x, c) =>
                (c.parent.element[x.name] = (c.event
                    .target as HTMLInputElement).checked)}
        />
    `;
}

function renderStringKnob(x: Attribute) {
    return html`
        <input
            id=${x => x.name}
            type="text"
            @input=${(x, c) =>
                (c.parent.element[x.name] = (c.event
                    .target as HTMLInputElement).value)}
        />
    `;
}

function renderEnumKnob(x, values: string[]) {
    return html`
        <select
            id=${x => x.name}
            @change=${(x, c) =>
                (c.parent.element[x.name] = (c.event
                    .target as HTMLInputElement).value)}
        >
            <option value="">select an option</option>
            ${repeat(
                _ => values,
                html`
                    <option value=${v => v}>${v => v}</option>
                `
            )}
        </select>
    `;
}

function renderNumberKnob(
    x,
    range: { start?: number; end?: number; step?: number }
) {
    return html`
        <input
            id=${x => x.name}
            type="number"
            min=${range.start}
            max=${range.end}
            step=${range.step}
            @input=${(x, c) =>
                (c.parent.element[x.name] = (c.event
                    .target as HTMLInputElement).value)}
        />
    `;
}

function renderStyleKnob(x: CssCustomProperty) {
    return html`
        <input
            id=${x => x.name}
            type="text"
            @change=${(x, c) => {
                c.parent.element.style.setProperty(
                    x.name,
                    (c.event.target as HTMLInputElement).value
                );
            }}
        />
    `;
}

const template = html<Interact>`
    Play!
    <div ${ref("elementContainer")}></div>
    <section>
        ${repeat(
            x => x.data?.attributes,
            html<Attribute>`
                <label for=${x => x.name}>${x => x.name}</label>
                ${when(
                    x => x.type.dataType == DataType.boolean,
                    x => renderBooleanKnob(x)
                )}
                ${when(
                    x => x.type.dataType == DataType.string,
                    x => renderStringKnob(x)
                )}
                ${when(
                    x => x.type.dataType == DataType.enumeration,
                    x => renderEnumKnob(x, x.type.values)
                )}
                ${when(
                    x => x.type.dataType == DataType.number,
                    x => renderNumberKnob(x, x.type.range)
                )}
            `
        )}
    </section>
    <section>
        ${repeat(
            x => x.data?.cssProperties,
            html<CssCustomProperty>`
                <label for=${x => x.name}>${x => x.name}</label>
                ${x => renderStyleKnob(x)}
            `
        )}
    </section>
    <section>
        event log
    </section>
    <section>
        api docs
    </section>
`;

const styles = css`
    :host {
        display: block;
    }
`;

@customElement({
    name: "fl-interact",
    template,
    styles
})
export class Interact extends FASTElement {
    @attr src: string;
    @observable data: CustomElement;
    @observable elementContainer: HTMLDivElement;
    @observable element: HTMLElement;
    @observable source: string;
    
    async srcChanged() {
        // TODO add catch statement
        const res = await fetch(this.src);
        this.data = await res.json();

        // create element, and append to container
        this.element = document.createElement(this.data.tagName);
        this.elementContainer.appendChild(this.element);
    }
}
