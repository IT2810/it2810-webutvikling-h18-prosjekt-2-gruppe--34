import React, { Component } from "react";

class Group extends Component {
  render() {
    console.log(this.props.btns);

    return (
      <div>
        {this.props.btns.map(btn => (
          <input
            name={btn.name}
            type="radio"
            key={btn.id}
            id={btn.id}
            onChange={btn.onPicChangeCategory}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}

export default Group;
