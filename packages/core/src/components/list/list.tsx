import { Prop, Element, Component, h } from "@stencil/core";

@Component({
  tag: "fl-list",
  styleUrl: "list.scss",
  shadow: true,
})
export class List {
  @Element() host: HTMLFlListElement;
  @Prop({ reflect: true }) float = false;
  @Prop({ mutable: true }) items: HTMLFlItemElement[] = [];
  
  componentWillLoad() {
    if (this.float) {
      // this.host.style.left = `${this.host.parentElement.clientWidth}px`;
    }
  }

  handleSlotChange = (e) => {
    const slot = e.target as HTMLSlotElement;
    this.items = slot.assignedElements({ flatten: true })
      .filter(item => item.tagName.toLowerCase() === "fl-item") as HTMLFlItemElement[];
  }

  render() {
    return (
      <ul>
        <slot
          onSlotchange={(e) => this.handleSlotChange(e)}
        />
      </ul>
    )
  }
}
