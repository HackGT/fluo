import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "fl-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true,
})
export class Checkbox {
  input: HTMLInputElement;
  /** Name of checkbox */
  @Prop() name: string;
  /** Value of checkbox */
  @Prop() value: string;
  /** Determines is checkbox is checked */
  @Prop({ reflect: true }) checked = false;
  /** Determines if checkbox is disabled */
  @Prop({ reflect: true }) disabled = false;
  /** Determines if checkbox is in indeterminate state */
  @Prop({ reflect: true }) indeterminate = false;

  handleClick = () => {
    this.checked = this.input.checked;
    this.indeterminate = false;
  };

  render() {
    // nesting input inside label and using a slot to capture label text
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    return (
      <Host 
        onClick={this.handleClick}
      >
        <label>
          <div 
            class="control"
          >
            {this.checked && (
              <div part="checked-icon" class="checked">
                {check()}
              </div>
            )}

            {!this.checked && this.indeterminate && (
              <div part="indeterminate-icon" class="indeterminate">
                -
              </div>
            )}

            <input
              ref={(el) => (this.input = el)}
              type="checkbox"
              name={this.name}
              value={this.value}
              disabled={this.disabled}
              checked={this.checked}
              indeterminate={this.indeterminate}
            />
          </div>
          <span part="label">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

function check() {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.91308 4.03516H1.91326C1.99256 4.03525 2.07081 4.05331 2.14213 4.08798C2.21341 4.12262 2.27591 4.17295 2.32497 4.2352L1.91308 4.03516ZM1.91308 4.03516H1.09394C0.890308 4.03516 0.776602 4.26975 0.902321 4.4292L0.902371 4.42927L4.11214 8.49567L4.11218 8.49573C4.32247 8.76188 4.72568 8.76114 4.93667 8.49617L4.93708 8.49566L10.6597 1.24398C10.6598 1.24378 10.66 1.24358 10.6602 1.24338C10.7884 1.08295 10.6699 0.85 10.4689 0.85H9.6498C9.48941 0.85 9.33668 0.9235 9.2376 1.05044C9.23751 1.05055 9.23742 1.05066 9.23734 1.05077L4.52403 7.02157M1.91308 4.03516L4.52403 7.02157M4.52403 7.02157L2.32506 4.23531L4.52403 7.02157Z"
        fill="white"
        stroke="white"
        stroke-width="0.3"
      />
    </svg>
  );
}
