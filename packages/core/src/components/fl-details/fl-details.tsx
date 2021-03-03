import { Element, Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fl-details',
  styleUrl: 'fl-details.css',
  shadow: true,
})
export class FlDetails {

/** Opens the component if set to true */
@Prop() open = false;

/** Disables component */
@Prop() disables = false;

/** Can be used to set a pure text summary using text */
@Prop() summary: String;

@Element() private element: HTMLFlDetailsElement;

componentWillLoad() {
  if (this.disables) {
    this.element.onclick = function(event) {
      event.preventDefault();
    }
  }
}

  render() {
    return (
      <Host>
        <details> 
          <slot name="summary">{this.summary}</slot>
          <slot></slot>
        </details>
      </Host>
    );
  }

}
