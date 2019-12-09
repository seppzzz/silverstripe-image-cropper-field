import React, { Component } from "react";
import { Input } from "reactstrap";

class Dimensions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = this.props.selectedWidth;
    const height = this.props.selectedHeight;
    const className = "image-crop-dimensions-edit " + this.props.showEditField;
    let EditButton = "";
    if (this.props.onEditButtonClick) {
      EditButton = (
        <span
          onClick={this.props.onEditButtonClick}
          class="image-crop-dimensions-edit-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
          </svg>
        </span>
      );
    }
    return (
      <div class="image-crop-dimensions">
        {EditButton} Width: <span>{width}px</span> Height:{" "}
        <span>{height}px</span>
        <div class={className}>
          <Input
            type="text"
            value={this.props.editFieldValue}
            onChange={e => this.props.editFieldOnChange(e)}
            placeholder="Example: 500x400"
          />
        </div>
      </div>
    );
  }
}

export default Dimensions;
