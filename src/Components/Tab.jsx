import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getTabClasses}
        onClick={this.props.onClick}
        id={this.props.id}
      >
        {this.props.id}
      </div>
    );
  }
  getTabClasses() {
    let classes = this.props.clicked
      ? "tab" + this.props.id + " active"
      : "tab" + this.props.id;
    return classes;
  }
}

export default Tab;
