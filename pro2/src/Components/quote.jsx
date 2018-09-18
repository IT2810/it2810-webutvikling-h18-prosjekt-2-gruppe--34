import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quotebox">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Quote;
