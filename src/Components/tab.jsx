import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getTabClasses}
        onClick={this.props.onClick}
      >
        {this.props.id}
      </div>
    );
  }
}

export default Tab;
