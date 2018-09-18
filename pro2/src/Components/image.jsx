import React, { Component } from "react";
import $ from "jquery";

class Image extends Component {
  render() {
    return (
      <div className="imgBox">
        <svg dangerouslySetInnerHTML={{__html: this.props.svg }} viewBox="0 0 1920 1080"></svg>
      </div>
    )
  }
}

export default Image;
