import React, { Component } from "react";


class Tab extends Component {

    render() {
      return (
        <div id={this.props.id}>
          <div className="button" onClick={this.props.onClick} id={this.props.id}>{this.props.id}</div>
        </div>
      );
    }
}

export default Tab;
