import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Group from "./Components/group";
import TabContainer from "./Components/TabContainer.jsx";

class App extends Component {
  state = {
    currentImg: null,
    currentQuote: null,
    currentSound: null,
    currentTab: 1,
    imageBtns: [
      { id: 1, name: "img" },
      { id: 2, name: "img" },
      { id: 3, name: "img" }
    ],
    quoteBtns: [
      { id: 4, name: "txt" },
      { id: 5, name: "txt" },
      { id: 6, name: "txt" }
    ],
    soundBtns: [
      { id: 7, name: "sound" },
      { id: 8, name: "sound" },
      { id: 9, name: "sound" }
    ],
    tabs: [
      { id: 1, soundId: 0, imageId: 0, quoteId: 0 },
      { id: 2, soundId: 0, imageId: 0, quoteId: 0 },
      { id: 3, soundId: 0, imageId: 0, quoteId: 0 },
      { id: 4, soundId: 0, imageId: 0, quoteId: 0 }
    ]
  };

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.tabPicker = this.tabPicker.bind(this);
    this.onPicChangeCategory = this.onPicChangeCategory.bind(this); //binder til APP state!
  }

  onPicChangeCategory(category) {
    this.setState({ currentImg: category });
  }

  onClick(e) {
    if (e.target.name === "img") {
      this.setState({ currentImg: e.target.id });
    } else if (e.target.name === "txt") {
      this.setState({ currentQuote: e.target.id });
    } else if (e.target.name === "sound") {
      this.setState({ currentSound: e.target.id });
    }
  }

  tabPicker(e) {
    this.setState({ currentTab: e.target.id });
  }

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <div>
          <div className="Tab" />
        </div>
        <p>CurrentImg: {this.state.currentImg}</p>
        <p>CurrentQuote: {this.state.currentQuote}</p>
        <p>currentSound: {this.state.currentSound}</p>
        <Group
          btns={this.state.imageBtns}
          onChange={this.onPicChangeCategory}
          onClick={this.onClick}
        />
        <Group
          btns={this.state.quoteBtns}
          onChange={this.onPicChangeCategory}
          onClick={this.onClick}
        />
        <Group
          btns={this.state.soundBtns}
          onChange={this.onPicChangeCategory}
          onClick={this.onClick}
        />

        <TabContainer
          tabs={this.state.tabs}
          currentImg={this.state.currentImg}
          currentSound={this.state.currentSound}
          currentQuote={this.state.currentQuote}
        />
      </React.Fragment>
    );
  }
}

export default App;
