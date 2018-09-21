import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div
        className="imgBox"
        dangerouslySetInnerHTML={{ __html: this.props.svg }}
      />
    );
  }
}

export default Image;
