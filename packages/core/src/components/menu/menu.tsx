import { Component, Event, EventEmitter, Host, h } from "@stencil/core";

@Component({
  tag: "fl-menu",
  styleUrl: "menu.scss",
  shadow: true
})
export class Menu {
  menu: HTMLElement;
  
  @Event({ eventName: 'fl-select' }) flSelect: EventEmitter<{ item: HTMLFlItemElement}>;
  
  connectedCallback() {
    this.emitSelected = this.emitSelected.bind(this);
  }


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

  // set focus item
  setActiveItem(item) {
    item.focus();
  }

  // fire custom event when item is selected
  emitSelected(e) {
    const target = e.target;
    const item = target.closest("fl-item");
    if (item && !item.hasMenu) this.flSelect.emit({ item });
  }


  
  // keyboard navigation
  
  // search: searches through options
    
  render() {
    return (
      <Host
        ref={el => {this.menu = el}}
        onClick={this.emitSelected}
      >
        <slot />
      </Host>
    );
  }
}
