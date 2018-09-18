import React, { Component } from "react";


class Tab extends Component {

    render() {
      return (
        <div id={this.props.id}>
          <button className="button" onClick={this.props.onClick} id={this.props.id}>{this.props.id}</button>
        </div>
      );
    }
}

export default Tab;
