import React, { Component } from "react";

class Group extends Component {
  render() {
    const type = this.props.name;
    let title;
    if (type === "img") {
      title = "Image:";
    } else if (type === "txt") {
      title = "Quote:";
    } else {
      title = "Sound:";
    }

    return (
      <div className={"group" + this.props.name}>
        <p>{title}</p>
        {this.props.btns.map(btn => (
          <label>
            {btn.id}
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
