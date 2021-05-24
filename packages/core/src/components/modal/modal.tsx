import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "fl-modal",
  styleUrl: "modal.scss",
  shadow: true
})
export class Modal {
  /** The title to be displayed in the modal. "Title" creates a conflict. */
  @Prop() header: string;

  /** State of the modal window, defaults to false */
  @State() open = false;

  /*
  More from Figma
  - Title prop
  - Overlay prop
  - secondary action function
  - Close position is top right using X icon button
  - 32px of padding, 4 px of rounded corners
  */

  toggleModal() {
    this.open = !this.open;
  }

  render() {
    return (
      <div class={{
        "modal-root": true,
      }}>
        <button onClick={() => this.toggleModal()}>Open Modal</button>
        <div class={{
          "modal-wrapper": true,
          [`modal__wrapper-${this.open}`]: true
        }}>
          <div
            class={{
              modal: true,
              [`modal__open-${this.open}`]: true,
            }}
          >
            <div class="modal-title">{this.header}</div>
            <slot name="content"></slot>
            <button onClick={() => this.toggleModal()}>
              Close Modal
            </button>
          </div>
        </div>
      </div>
    );
  }
}
