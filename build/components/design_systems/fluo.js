var p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,n=(m,r,t,s)=>{for(var e=s>1?void 0:s?d(r,t):r,o=m.length-1,i;o>=0;o--)(i=m[o])&&(e=(s?i(r,t,e):i(e))||e);return s&&e&&p(r,t,e),e};import{css as f}from"../../web_modules/@microsoft/fast-element.js";import{DesignSystemProvider as l,defineDesignSystemProvider as y,designSystemProperty as a,DesignSystemProviderTemplate as v}from"../../web_modules/@microsoft/fast-foundation.js";export let FluoDesignSystemProvider=class extends l{};n([a({default:"10%",cssCustomProperty:"padding-10"})],FluoDesignSystemProvider.prototype,"paddingTenPercent",2),FluoDesignSystemProvider=n([y({name:"fl-design-system-provider",template:v,styles:f`
        :host {
            display: block;
        }
    `})],FluoDesignSystemProvider);
