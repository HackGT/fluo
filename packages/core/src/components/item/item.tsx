import { Host, Prop, Component, Element, State, h } from "@stencil/core";

@Component({
  tag: "fl-item",
  styleUrl: "item.css",
  shadow: true
})
export class Item {
  @Element() host: HTMLFlItemElement;
  listItem: HTMLLIElement; 
  slot: HTMLSlotElement;

  
  @State() nested = false;

  @Prop({ reflect: true, mutable: true }) collapse = true;

  handleSlotchange = (e) => {
    const slot = e.target as HTMLSlotElement;
    this.nested = slot.assignedNodes().length !== 0;
  }

  handleClick = () => {
    this.collapse = !this.collapse;
  }

  render() {
    return (
      <Host
      >
        <li
          onClick={this.handleClick}
          ref={(el) => (this.listItem = el)}
        >
          <slot />
          {this.nested ?
            this.collapse ? (
              <span class="chevron">
                {chevron_right()}            
              </span>
              ) : (
              <span class="chevron">
                {chevron_down()}            
              </span>
              )
          : null}
        </li>
        <slot 
          name="nested"
          onSlotchange={(e) => this.handleSlotchange(e)}
        />
      </Host>
    )
  }
}

function chevron_right() {
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    	 width="12px" height="12px" viewBox="0 0 444.819 444.819">
    	<path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
    		c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
    		c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
    		c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
    		c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
    </svg>
  )
}

function chevron_down() {
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" x="0px" y="0px"
    	 viewBox="0 0 256 256">
    <g>
    	<g>
    		<polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		"/>
    	</g>
    </g>
    </svg>
  )
}
