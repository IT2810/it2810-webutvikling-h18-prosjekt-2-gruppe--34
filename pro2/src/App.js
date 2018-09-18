import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Group from "./Components/group";
import TabContainer from "./Components/TabContainer.jsx";
import Exhibition from "./Components/Exhibition";

class App extends Component {
  state = {
    currentImg: "animal",
    currentQuote: "einstein",
    currentSound: null,
    currentTab: 1,
    svg: "bilde",
    text: [],
    imageBtns: [
      { id: "animal", name: "img"},
      { id: "food", name: "img"},
      { id: "internet", name: "img" }
    ],
    quoteBtns: [
      { id: "einstein", name: "txt" },
      { id: "gandhi", name: "txt" },
      { id: "michaelscott", name: "txt" }
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
    this.onMediaClick = this.onMediaClick.bind(this);
    this.tabPicker = this.tabPicker.bind(this);

    /*this.onPicChangeCategory = this.onPicChangeCategory.bind(this); //binder til APP state!*/
  }
/*
  onPicChangeCategory(category) {
    this.setState({ currentImg: category });
  }
*/

  onMediaClick(e) {
    if (e.target.name === "img") {
      this.setState({ currentImg: e.target.id }, function () {
          this.loadPicture();
          this.loadText();
      });
    } else if (e.target.name === "txt") {
      this.setState({ currentQuote: e.target.id }, function () {
          this.loadPicture();
          this.loadText();
      });
    } else if (e.target.name === "sound") {
      this.setState({ currentSound: e.target.id }, function () {
          this.loadPicture();
          this.loadText();
      });
    }
  }

    tabPicker(e) {
        this.setState({ currentTab: e.target.id }, function () {
            this.loadPicture();
            this.loadText();
        });

    }

    async loadPicture() {
        const url = "ContentFiles/Pictures/" + this.state.currentImg + this.state.currentTab + ".svg";
        const response = await fetch(url, {});
        const text = await response.text();
        this.setState({svg: text});
        console.log(url);
    }

    async loadText() {
       const url = "ContentFiles/Quotes/" + this.state.currentQuote + this.state.currentTab + ".json"
        const response = await fetch(url, {});
        const text = await response.json();
        this.setState({text: text.text});
        console.log(url);
    }

    loadSound() {
        console.log("Do something here");
    }

  render() {
    return (
      <div className="App">
      <div className="header">
          <h1>utstilling</h1>
      </div>
      <React.Fragment>
        <div className="Tab"></div>
        <div className="box">
        <p>CurrentImg: {this.state.currentImg}</p>
        <p>CurrentQuote: {this.state.currentQuote}</p>
        <p>currentSound: {this.state.currentSound}</p>
        <p>CurrentTab: {this.state.currentTab}</p>
        </div>
        <div className="check_box">
            <Group
              btns={this.state.imageBtns}
              onMediaClick={this.onMediaClick}
            />
            <Group
              btns={this.state.quoteBtns}
              onMediaClick={this.onMediaClick}
            />
            <Group
              btns={this.state.soundBtns}
              onMediaClick={this.onMediaClick}
            />
        </div>
        <TabContainer
          tabs={this.state.tabs}
          onClick={this.tabPicker}
          loadSound={this.loadSound}
          loadText={this.loadText}
          loadPicture={this.loadPicture}
          svg={this.state.svg}
          text={this.state.text}
        />
      <div className="content">
        <Exhibition
          svg={this.state.svg}
          text={this.state.text}
          />
      </div>
      </React.Fragment>
      </div>
    );
  }
}

export default App;
