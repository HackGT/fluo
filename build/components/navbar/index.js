var a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,p=(t,s,l,r)=>{for(var e=r>1?void 0:r?i(s,l):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(r?o(s,l,e):o(e))||e);return r&&e&&a(s,l,e),e};import{attr as m,html as c,css as f,FASTElement as v,customElement as u}from"../../web_modules/@microsoft/fast-element.js";const _=c`
    <h1>${t=>t.title}</h1> 
    <ul>
        <slot></slot>
    </ul>
`,y=f`
    :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 0px var(--padding-10);
    }
`;export let NavBar=class extends v{};p([m],NavBar.prototype,"title",2),NavBar=p([u({name:"fl-nav",template:_,styles:y})],NavBar);
