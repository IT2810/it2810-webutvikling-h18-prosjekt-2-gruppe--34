import React, { Component } from "react";

class Image extends Component {

  render() {
    return (
      <div>
        <svg className="picture_box" dangerouslySetInnerHTML={{__html: this.props.svg }}></svg>
      </div>
    );
  }
}

export default Image;
