import React, { Component } from "react";
import Tab from "./Tab.jsx";
import Exhibition from "./Exhibition";
import $ from "jquery";


class TabContainer extends Component {
    constructor() {
        super();

    }



  //TODO: Bytte media ved trykk.


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
          />
      ))}


      </div>
    );
  }
}

export default TabContainer;
