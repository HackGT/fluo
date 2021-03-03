import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fl-details',
  styleUrl: 'fl-details.css',
  shadow: true,
})
export class FlDetails {

@Prop() open = false;

  render() {
    return (
      <Host>
        <details open>
          TEXT
          <slot></slot>
        </details>
      </Host>
    );
  }

}
