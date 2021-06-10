import { Component, h, Prop, Host } from "@stencil/core";

// TODO: handle form submission
// TODO: handle disabled
@Component({
  tag: "fl-upload",
  styleUrl: "upload.scss",
  shadow: true,
})
export class Upload {
  input: HTMLInputElement;
  dropzone: HTMLDivElement;
  @Prop({ mutable: true }) files: File[] = [];

  handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();

    this.dropzone.classList.add("dragged");
  }

  handleDragOver = (e) =>  {
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();

    this.dropzone.classList.remove("dragged");
  }

  handleDrop = (e: DragEvent) =>  {
    e.stopPropagation();
    e.preventDefault();

    this.dropzone.classList.remove("dragged");

    this.files = [...this.files, ...Array.from(e.dataTransfer.files)]

  }

  handleChange = () => {
    this.files = Array.from(this.input.files);
  }

  handleRemoveFile = (idx) => {
    this.files = this.files.filter((_, i) => i !== idx);
  }

  render() {
    return (
      <Host>
        <div
          class="drop-zone"
          ref={(el) => (this.dropzone = el)}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        >
          {arrow()}
          <span>Drag files here</span>
          <fl-button onClick={() => this.input.click()}>Browse Files</fl-button>
          <input 
            ref={(el) => (this.input = el as HTMLInputElement)} 
            class="file-input" 
            type="file" 
            onChange={this.handleChange}
            multiple
            />
        </div>
        <div class="files">
          <ul>
            {this.files.map(
              ({ name }, idx) => (
                <li key={idx}>
                  <fl-tag 
                    text={name} 
                    handleRemove={() => this.handleRemoveFile(idx)}
                    removable
                  />
                </li>
              ))}
          </ul>
        </div>
      </Host>
    );
  }
}

function arrow() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 12.5C24 19.1276 18.6276 24.5 12 24.5C5.3724 24.5 0 19.1276 0 12.5C0 5.8724 5.3724 0.5 12 0.5C18.6276 0.5 24 5.8724 24 12.5ZM6.3516 10.4516L11.1516 5.6516C11.3766 5.42664 11.6818 5.30026 12 5.30026C12.3182 5.30026 12.6234 5.42664 12.8484 5.6516L17.6484 10.4516C17.867 10.6779 17.9879 10.981 17.9852 11.2957C17.9825 11.6103 17.8563 11.9113 17.6338 12.1338C17.4113 12.3563 17.1103 12.4825 16.7957 12.4852C16.481 12.4879 16.1779 12.367 15.9516 12.1484L13.2 9.3968V18.5C13.2 18.8183 13.0736 19.1235 12.8485 19.3485C12.6235 19.5736 12.3183 19.7 12 19.7C11.6817 19.7 11.3765 19.5736 11.1515 19.3485C10.9264 19.1235 10.8 18.8183 10.8 18.5V9.3968L8.0484 12.1484C7.82208 12.367 7.51895 12.4879 7.20432 12.4852C6.88968 12.4825 6.58871 12.3563 6.36622 12.1338C6.14373 11.9113 6.01753 11.6103 6.01479 11.2957C6.01206 10.981 6.13301 10.6779 6.3516 10.4516Z"
        fill="#858585"
      />
    </svg>
  );
}
