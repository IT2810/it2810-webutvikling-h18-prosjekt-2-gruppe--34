import React, { Component } from "react";
import $ from "jquery";

class Image extends Component {
  render() {
    return (
      <div className="imgBox" dangerouslySetInnerHTML={{__html: this.props.svg }}>
      </div>
    )
  }
}

export default Image;
