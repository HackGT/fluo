var f=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=(o,e,s,r)=>{for(var t=r>1?void 0:r?i(e,s):e,l=o.length-1,p;l>=0;l--)(p=o[l])&&(t=(r?p(e,s,t):p(t))||t);return r&&t&&f(e,s,t),t};import{when as c,attr as u,FASTElement as m,html as a,css as b,customElement as v}from"../../web_modules/@microsoft/fast-element.js";const h=a`
    <button>
        <slot>button</slot>
        ${c(o=>o.on,a`on!`)}
        ${c(o=>!o.on,a`off!`)}
    </button>
`,_=b`
    button {
        background: var(--testing-background-color);
        font-size: var(--font-size-large);
        border-radius: 10px;
    }
`;export let Button=class extends m{constructor(){super(...arguments);this.on=!0,this.hi="",this.val=0}};n([u],Button.prototype,"on",2),n([u],Button.prototype,"hi",2),n([u],Button.prototype,"val",2),Button=n([v({name:"fl-button",template:h,styles:_})],Button);
