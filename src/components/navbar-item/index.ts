import { html, css, FASTElement, customElement } from "@microsoft/fast-element";

const template = html`
    <slot></slot>
`;

const styles = css`

`;


@customElement({
    name: "fl-nav-item",
    template,
    styles
})
export class NavBarItem extends FASTElement {}
