import React, { Component } from "react";
import Tab from "./Tab.jsx";

class TabContainer extends Component {
  //TODO: Bytte media ved trykk.

  render() {
    const { tabs } = this.props;
    return (
      <div className="tabbRow">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            id={tab.id}
            imgurl={
              "public/ContentFiles/Images/" +
              this.props.currentImg +
              "/" +
              tab.id
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
