import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.url} goes here</p>
      </div>
    );
  }
}

export default Image;
