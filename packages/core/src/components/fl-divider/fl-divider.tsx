import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fl-divider',
  styleUrl: 'fl-divider.css',
  shadow: true,
})
export class FlDivider {

@Prop() orientation: "vertical" | "horizontal" = "horizontal";

  render() {
    return (
      <Host>
        <div class={this.orientation}/>
      </Host>
    );
  }

}
