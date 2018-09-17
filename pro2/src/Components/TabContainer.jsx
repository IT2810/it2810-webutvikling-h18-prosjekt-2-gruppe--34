import React, { Component } from "react";
import Tab from "./Tab";

class TabContainer extends Component {
  //TODO: Bytte media ved trykk.

  render() {
    const { tabs, handleClick } = this.props;
    return (
      <div className="tabRow">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            id={"tab" + tab.id}
            onClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

export default TabContainer;
