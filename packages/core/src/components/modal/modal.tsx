import { Component, Prop, Host, Element, h, Watch} from "@stencil/core";

@Component({
  tag: "fl-modal",
  styleUrl: "modal.scss",
  shadow: true
})
export class Modal {
  @Element() host: HTMLFlModalElement

  /** The title to be displayed in the modal. "Title" creates a conflict. */
  @Prop() header: string;

  /** Displays modal if state is true, otherwise no render */
  @Prop() open = false;

  @Watch("open")
  toggleModal() {
    // Some external source opens the modal, internals close it
    this.host.dispatchEvent(new Event("change"));
  }

  setOpen(value: boolean) {
    this.open = value;
  }

  render() {
    return (
      <Host>
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
            <i class="fl-icon-x modal-close" onClick={() => this.setOpen(false)}>
              {/* Did not know where to put this. Remove comment if solution found */}
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4016 8.01229L16.6946 1.71929C16.7901 1.62704 16.8663 1.5167 16.9187 1.39469C16.9711 1.27269 16.9987 1.14147 16.9999 1.00869C17.001 0.87591 16.9757 0.744231 16.9255 0.621334C16.8752 0.498438 16.8009 0.386786 16.707 0.292893C16.6131 0.199001 16.5015 0.124747 16.3786 0.0744666C16.2557 0.0241857 16.124 -0.00111606 15.9912 3.77567e-05C15.8584 0.00119157 15.7272 0.0287779 15.6052 0.0811869C15.4832 0.133596 15.3729 0.209778 15.2806 0.305288L8.98763 6.59829L2.69463 0.305288C2.50603 0.12313 2.25343 0.0223358 1.99123 0.0246142C1.72903 0.0268926 1.47822 0.132062 1.29281 0.31747C1.1074 0.502878 1.00223 0.75369 0.999956 1.01589C0.997678 1.27808 1.09847 1.53069 1.28063 1.71929L7.57363 8.01229L1.28063 14.3053C1.18512 14.3975 1.10894 14.5079 1.05653 14.6299C1.00412 14.7519 0.976533 14.8831 0.97538 15.0159C0.974226 15.1487 0.999527 15.2803 1.04981 15.4032C1.10009 15.5261 1.17434 15.6378 1.26824 15.7317C1.36213 15.8256 1.47378 15.8998 1.59668 15.9501C1.71957 16.0004 1.85125 16.0257 1.98403 16.0245C2.11681 16.0234 2.24803 15.9958 2.37003 15.9434C2.49204 15.891 2.60238 15.8148 2.69463 15.7193L8.98763 9.42629L15.2806 15.7193C15.4201 15.8601 15.5983 15.9562 15.7926 15.9953C15.9869 16.0344 16.1884 16.0148 16.3715 15.939C16.5546 15.8631 16.711 15.7345 16.8207 15.5695C16.9304 15.4044 16.9886 15.2105 16.9876 15.0123C16.9877 14.881 16.9618 14.7509 16.9115 14.6296C16.8612 14.5083 16.7875 14.3981 16.6946 14.3053L10.4016 8.01229Z" fill="#5C5F62"/>
              </svg>
            </i>
            <div class="modal-title">{this.header}</div>
            <div class="modal-content">
              <slot name="content"></slot>
            </div>
            <div class="modal-action">
              <slot name="actions"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
