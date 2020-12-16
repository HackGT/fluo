var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=(e,n,t,a)=>{for(var o=a>1?void 0:a?y(n,t):n,m=e.length-1,c;m>=0;m--)(c=e[m])&&(o=(a?c(n,t,o):c(o))||o);return a&&o&&d(n,t,o),o};import{attr as $,observable as s,html as r,css as v,ref as b,repeat as u,when as i,FASTElement as f,customElement as h}from"../../web_modules/@microsoft/fast-element.js";import{DataType as l}from"../schema.js";function g(e){return r`
        <input
            id=${n=>n.name}
            type="checkbox"
            @change=${(n,t)=>t.parent.element[n.name]=t.event.target.checked}
        />
    `}function x(e){return r`
        <input
            id=${n=>n.name}
            type="text"
            @input=${(n,t)=>t.parent.element[n.name]=t.event.target.value}
        />
    `}function _(e,n){return r`
        <select
            id=${t=>t.name}
            @change=${(t,a)=>a.parent.element[t.name]=a.event.target.value}
        >
            <option value="">select an option</option>
            ${u(t=>n,r`
                    <option value=${t=>t}>${t=>t}</option>
                `)}
        </select>
    `}function P(e,n){return r`
        <input
            id=${t=>t.name}
            type="number"
            min=${n.start}
            max=${n.end}
            step=${n.step}
            @input=${(t,a)=>a.parent.element[t.name]=a.event.target.value}
        />
    `}function w(e){return r`
        <input
            id=${n=>n.name}
            type="text"
            @change=${(n,t)=>{t.parent.element.style.setProperty(n.name,t.event.target.value)}}
        />
    `}const T=r`
    Play!
    <div ${b("elementContainer")}></div>
    <section>
        ${u(e=>e.data?.attributes,r`
                <label for=${e=>e.name}>${e=>e.name}</label>
                ${i(e=>e.type.dataType==l.boolean,e=>g(e))}
                ${i(e=>e.type.dataType==l.string,e=>x(e))}
                ${i(e=>e.type.dataType==l.enumeration,e=>_(e,e.type.values))}
                ${i(e=>e.type.dataType==l.number,e=>P(e,e.type.range))}
            `)}
    </section>
    <section>
        ${u(e=>e.data?.cssProperties,r`
                <label for=${e=>e.name}>${e=>e.name}</label>
                ${e=>w(e)}
            `)}
    </section>
    <section>
        event log
    </section>
    <section>
        api docs
    </section>
`,j=v`
    :host {
        display: block;
    }
`;export let Interact=class extends f{async srcChanged(){const e=await fetch(this.src);this.data=await e.json(),this.element=document.createElement(this.data.tagName),this.elementContainer.appendChild(this.element)}};p([$],Interact.prototype,"src",2),p([s],Interact.prototype,"data",2),p([s],Interact.prototype,"elementContainer",2),p([s],Interact.prototype,"element",2),p([s],Interact.prototype,"source",2),Interact=p([h({name:"fl-interact",template:T,styles:j})],Interact);
