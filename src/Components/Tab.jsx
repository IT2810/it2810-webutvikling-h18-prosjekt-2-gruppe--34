import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={"tab" + this.props.id}
        onClick={this.props.onClick}
        id={this.props.id}
      >
        {this.props.id}
      </div>
    );
  }
}

export default Tab;
