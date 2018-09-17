import React, { Component } from "react";

class Sound extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.url} url</p>
      </div>
    );
  }
}

export default Sound;
