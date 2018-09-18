import React, { Component } from "react";

class Quote extends Component {

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Quote;
