import { Host, Component, Prop, Element, h } from "@stencil/core";

@Component({
  tag: "fl-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
  @Prop() hasMenu = false;
  @Element() item;

  // Dynamically place nested menus
  placeMenu(e) {
    const menu = e.target.querySelector("fl-menu");
    if (menu === null) return;

    let [mwidth,mheight] = [menu.offsetWidth, menu.offsetHeight];
    let [dwidth,dheight] = [window.innerWidth, window.innerHeight];
    const rect = e.target.getBoundingClientRect();
    
    if ((dwidth - rect.right) > mwidth) {
      menu.style.left = "100%";
    } else {
      menu.style.left = "-100%";
    }

    if ((dheight - rect.bottom) > mheight) {
      menu.style.top = "0px";
    } else {
      menu.style.top = `-${mheight - rect.height}px`;
    }
  }
  
  componentWillRender() {
    if (this.item.querySelector("fl-menu")) {
      this.hasMenu = true;
    }
  }

  render() {
    return (
      <Host
        onMouseEnter={this.placeMenu}
      >
        <slot name="prefix"></slot>

        <slot />

        <slot name="suffix"></slot>
        
        { this.hasMenu
          ?
            (<span part="chevron">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 256 256"
                height="10px"
              >
		        <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/>
              </svg>
            </span>)
          : ""
        }
      </Host>
    )
  }
}
