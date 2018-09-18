import React, { Component } from "react";

class Group extends Component {
  render() {
    return (
      <div className="labels">
        {this.props.btns.map(btn => (
          <label>{btn.id}
            <input
            name={btn.name}
            type="radio"
            key={btn.id}
            id={btn.id}
           /* onChange={btn.onPicChangeCategory} */
            onClick={this.props.onMediaClick}
          />
          </label>

        ))}
      </div>
    );
  }
}

export default Group;
