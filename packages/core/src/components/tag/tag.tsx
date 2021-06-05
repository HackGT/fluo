import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "fl-tag",
  styleUrl: "tag.scss",
  shadow: true,
})
export class Tag {
  @Prop() text = "<missing text>";
  @Prop() handleRemove: (event: MouseEvent) => void = () => {
    throw "<fl-tag>: Missing remove handler";
  }
  @Prop({ reflect: true }) removable = false;

  render() {
    return (
      <span>
        {this.text}
        {this.removable ? 
          <span 
            class="cross"
            onClick={this.handleRemove}
          >
            {cross()}
          </span> 
        : null}
      </span>
    );
  }
}

function cross() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.70592 4L7.84759 0.858326C7.89527 0.812273 7.9333 0.757185 7.95947 0.696277C7.98563 0.635368 7.99941 0.569859 7.99998 0.503571C8.00056 0.437283 7.98793 0.371545 7.96282 0.310191C7.93772 0.248837 7.90065 0.193096 7.85378 0.146222C7.8069 0.0993477 7.75116 0.0622781 7.68981 0.0371762C7.62846 0.0120743 7.56272 -0.000557174 7.49643 1.88494e-05C7.43014 0.000594873 7.36463 0.0143669 7.30372 0.0405312C7.24282 0.0666955 7.18773 0.104728 7.14167 0.15241L4 3.29408L0.858326 0.15241C0.764169 0.0614706 0.638062 0.0111508 0.507164 0.0122882C0.376267 0.0134257 0.251053 0.0659295 0.158491 0.158491C0.0659295 0.251053 0.0134257 0.376267 0.0122882 0.507164C0.0111508 0.638062 0.0614706 0.764169 0.15241 0.858326L3.29408 4L0.15241 7.14167C0.104728 7.18773 0.0666955 7.24282 0.0405312 7.30372C0.0143669 7.36463 0.000594873 7.43014 1.88494e-05 7.49643C-0.000557174 7.56272 0.0120743 7.62846 0.0371762 7.68981C0.0622781 7.75116 0.0993477 7.8069 0.146222 7.85378C0.193096 7.90065 0.248837 7.93772 0.310191 7.96282C0.371545 7.98793 0.437283 8.00056 0.503571 7.99998C0.569859 7.99941 0.635368 7.98563 0.696277 7.95947C0.757185 7.9333 0.812273 7.89527 0.858326 7.84759L4 4.70592L7.14167 7.84759C7.2113 7.91788 7.30028 7.96585 7.39728 7.98538C7.49427 8.00491 7.59488 7.99512 7.68629 7.95726C7.7777 7.9194 7.85576 7.85519 7.91054 7.7728C7.96532 7.6904 7.99433 7.59357 7.99387 7.49463C7.99388 7.42907 7.98097 7.36416 7.95587 7.30359C7.93077 7.24303 7.89397 7.188 7.84759 7.14167L4.70592 4Z"
        fill="black"
      />
    </svg>
  );
}