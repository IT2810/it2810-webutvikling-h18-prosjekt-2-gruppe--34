import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.url} here</p>
      </div>
    );
  }
}

export default Quote;
