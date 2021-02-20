import { Host, Component, h } from "@stencil/core";

@Component({
  tag: "fl-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
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

  render() {
    return (
      <Host
        onMouseEnter={this.placeMenu}
      >
        <slot />
      </Host>
    )
  }
}
