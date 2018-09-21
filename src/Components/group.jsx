import React, { Component } from "react";

/**
 * En komponent som består av bilde-, text- eller lydknapper
 */

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

    /**
     * Bruker listen btns som sendes fra app til å konstruere forskjellige btns for hvert element i btns lista.
     */
    return (
      <div className={"group" + this.props.name}>
        <p>{title}</p>
        {this.props.btns.map(btn => (
          <label key={btn.id}>
            {btn.id}
            <input
              name={btn.name}
              type="radio"
              key={btn.id}
              id={btn.id}
              onClick={this.props.onMediaClick}
            />
          </label>
        ))}
      </div>
    );
  }
}

export default Group;
