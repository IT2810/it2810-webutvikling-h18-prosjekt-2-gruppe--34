import React, { Component } from "react";

class Group extends Component {
  render() {
    console.log(this.props.btns);

    return (
      <div>
        {this.props.btns.map(btn => (
          <input type="radio" key={btn.id} id={btn.id} />
        ))}
      </div>
    );
  }
}

export default Group;
