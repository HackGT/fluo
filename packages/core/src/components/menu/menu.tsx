import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "fl-menu",
  styleUrl: "menu.scss",
  shadow: true
})
export class Menu {
  // TODO can we hide non-menu-item elements?
  menu: HTMLElement;

  // get all items in the menu (including disabled items)
  getItems() {
    const slot = this.menu.querySelector("slot"); 

    // only want to return "fl-item" elements
    return [...slot.assignedElements()
      .filter(({ tagName }) => tagName === "fl-item")];
  }

  // get active item
  getActiveItem() {
    this.getItems().find(i => i === document.activeElement);
  }

  // set focus on active item 
  setActiveItem(item) {
    item.focus();
  }

  // fire custom event when item is selected
   
  // keyboard navigation
  
  // search: searches through options
    
  render() {
    return (
      <Host
        ref={el => {this.menu = el}}
      >
        <slot />
      </Host>
    );
  }
}
