import { Component, Host, h, Prop, Element } from "@stencil/core";
import { btypes, positions } from "./btypes";

@Component({
  tag: "fl-badge",
  styleUrl: "fl-badge.css",
  shadow: true,
})
export class FlBadge {

@Prop() type: btypes = btypes.PRIMARY;

@Prop() count: number | string;

@Prop() pill = false;

@Prop() cust_color: string;

@Prop() cust_style: string;
private _cust_style: { [key: string]: string; } 

@Prop() position: positions = positions.NONE;

/* stylelint-disable */
@Element() private element: HTMLFlBadgeElement;

/* stylelint-enable */
private _colors = {
  "primary" : "#B10DC9",
  "success" : "green",
  "danger" : "red",
  "info" : "blue",
  "warning" : "yellow"
}

componentWillLoad() {

  this.element.parentElement.style.position = "relative";
  // Just ensures some default type is set for badge
  if (!Object.values(btypes).includes(this.type)) {
    this.type = btypes.PRIMARY;
  }

  // Sets custom styles if present otherwise creates style object based around specified props.
  if (this.cust_style != undefined && this.cust_style != null && this.cust_style != "") {
    try {
      this._cust_style = JSON.parse(this.cust_style);
    } catch (error) {
      throw Error("Formatting issue with custom style. Please verify the input string is parsable via JSON.");
    }
  } else {
    const pos = this.position.split("-", 2);
    if (pos.length == 1) {
      this._cust_style = {
        backgroundColor: this._colors[this.type], 
        borderRadius: this.pill ? "16px" : "0px", 
        position: "absolute", 
        paddingTop:"3px",
        paddingBottom: "4px",
        paddingLeft: "6px",
        paddingRight: "6px",
        textAlign: "center"
      };
    } else {
      this._cust_style = {
        backgroundColor: this._colors[this.type], 
        borderRadius: this.pill ? "16px" : "0px", 
        position: "absolute", 
        paddingTop:"3px",
        paddingBottom: "4px",
        paddingLeft: "6px",
        paddingRight: "6px",
        textAlign: "center",
        [pos[0]]: "-10px",
        [pos[1]]: "-10px"
      };
    }
    // custom color overrides type background color
    if (this.cust_color) {
      this._cust_style.backgroundColor = this.cust_color;
    }
  }
}
render() {
  return (
    <Host style={this._cust_style}>{!this.element.innerText ? this.type : null}
      <slot></slot>
    </Host>
  );
}
}
