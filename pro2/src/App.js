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
    this.onImgClick = this.onImgClick.bind(this);
    this.onPicChangeCategory = this.onPicChangeCategory.bind(this); //binder til APP state!
  }

  onPicChangeCategory(category) {
    this.setState({ currentImg: category });
  }

  onImgClick(e) {
    this.setState({ currentImg: e.target.id });
  }

  onQuoteClick(e) {
    this.setState({ currentQuote: e.target.id });
  }

  onSoundClick(e) {
    this.setState({ currentSound: e.target.id });
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
          onImgClick={this.onImgClick}
        />
        <Group
          btns={this.state.quoteBtns}
          onChange={this.onPicChangeCategory}
          onQuoteClick={this.onQuoteClick}
        />
        <Group
          btns={this.state.soundBtns}
          onChange={this.onPicChangeCategory}
          onSoundClick={this.onSoundClick}
        />
      </React.Fragment>
    );
  }
}

export default App;
