import { attr, html, css, FASTElement, customElement } from "@microsoft/fast-element";

const template = html`
    <h1>${x=>x.title}</h1> 
    <ul>
        <slot></slot>
    </ul>
`;

const styles = css`
    :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 0px var(--padding-10);
    }
`;

@customElement({
    name: "fl-nav",
    template,
    styles
})
export class NavBar extends FASTElement {
    @attr title: string;
}
