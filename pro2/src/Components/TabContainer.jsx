import React, { Component } from "react";
import Tab from "./Tab.jsx";

class TabContainer extends Component {
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
            imgurl={
              "ContentFiles/Pictures/" +
              this.props.currentImg +
              +
              tab.id +
              ".svg"
            }
            soundurl={
              "public/ContentFiles/Sounds/" +
              this.props.currentSound +
              "/" +
              tab.id
            }
            quoteurl={
              "public/ContentFiles/Quotes/" +
              this.props.currentQuote +
              "/" +
              tab.id
            }
          />
      ))}
      </div>
    );
  }
}

export default TabContainer;
