var n=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p=(m,t,s,r)=>{for(var e=r>1?void 0:r?f(t,s):t,l=m.length-1,o;l>=0;l--)(o=m[l])&&(e=(r?o(t,s,e):o(e))||e);return r&&e&&n(t,s,e),e};import{html as c,css as v,FASTElement as a,customElement as _}from"../../web_modules/@microsoft/fast-element.js";const i=c`
    <slot></slot>
`,u=v`

`;export let NavBarItem=class extends a{};NavBarItem=p([_({name:"fl-nav-item",template:i,styles:u})],NavBarItem);
