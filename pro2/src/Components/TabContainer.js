import React from "react";

function Tab(props) {
  return (
    <div className="button" id={props.id} onClick={props.onClick}>
      <h2 className="btnTxt">{props.id} </h2>
    </div>
  );
}

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  //TODO: Bytte media ved trykk.
  handleClick() {
    alert("Hallo");
  }

  renderTab(i) {
    return <Tab id={"tab" + i} onClick={() => this.handleClick()} />;
  }

  render() {
    return (
      <div className="tabRow">
        {this.renderTab(1)}
        {this.renderTab(2)}
        {this.renderTab(3)}
        {this.renderTab(4)}
      </div>
    );
  }
}

export default TabContainer;
