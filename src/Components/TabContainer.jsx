import React, { Component } from "react";
import Tab from "./Tab.jsx";

class TabContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const { tabs } = this.props;
    return (
      <div className="tabRow">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            id={tab.id}
            onClick={this.props.onClick}
            value={tab.value}
            className={"tab" + tab.id}
          />
        ))}
      </div>
    );
  }
}

export default TabContainer;
