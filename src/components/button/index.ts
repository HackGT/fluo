import { when, attr, FASTElement, html, css, customElement } from "@microsoft/fast-element";

const template = html`
    <button>
        <slot>button</slot>
        ${when(x=>x.on,html`on!`)}
        ${when(x=>!x.on,html`off!`)}
    </button>
`;

const styles = css`
    button {
        background: var(--testing-background-color);
        font-size: var(--font-size-large);
        border-radius: 10px;
    }
`;

@customElement({
    name: "fl-button",
    template,
    styles
})
export class Button extends FASTElement {
    @attr on: boolean = true;
    @attr hi: string = "";
    @attr val: number = 0;
}

