import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Group from "./Components/group";

class App extends Component {
  state = {
    currentImg: null,
    currentQuote: null,
    currentSound: null,
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
    ]
  };

  constructor() {
    super();
    this.onPicChangeCategory = this.onPicChangeCategory.bind(this);
  }

  onPicChangeCategory(category) {
    this.setState({ currentImg: category });
  }

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <div>
          <div className="Tab" />
        </div>
        <Group
          btns={this.state.imageBtns}
          onChange={this.onPicChangeCategory}
        />
        <Group btns={this.state.quoteBtns} />
        <Group btns={this.state.soundBtns} />
      </React.Fragment>
    );
  }
}

export default App;
