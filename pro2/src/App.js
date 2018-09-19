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
    currentSound: "random1",
    currentTab: 1,
    svg: "bilde",
    text: [],
    sound: "not found",
    imageBtns: [
      { id: "animal", name: "img" },
      { id: "food", name: "img" },
      { id: "internet", name: "img" }
    ],
    quoteBtns: [
      { id: "einstein", name: "txt" },
      { id: "gandhi", name: "txt" },
      { id: "michaelscott", name: "txt" }
    ],
    soundBtns: [
      { id: "random1", name: "sound" },
      { id: "random2", name: "sound" },
      { id: "random3", name: "sound" }
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
      this.setState({ currentImg: e.target.id }, function() {
        this.loadPicture();
        this.loadText();
        this.loadSound();
      });
    } else if (e.target.name === "txt") {
      this.setState({ currentQuote: e.target.id }, function() {
        this.loadPicture();
        this.loadText();
        this.loadSound();
      });
    } else if (e.target.name === "sound") {
      this.setState({ currentSound: e.target.id }, function() {
        this.loadPicture();
        this.loadText();
        this.loadSound();
      });
    }
  }

  tabPicker(e) {
    this.setState({ currentTab: e.target.id }, function() {
      this.loadPicture();
      this.loadText();
      this.loadSound();
    });
  }

  async loadPicture() {
    const key = this.state.currentImg + this.state.currentTab;
    const cachedHits = sessionStorage.getItem(key);
    if (cachedHits) {
      this.setState({ svg: cachedHits });
      return;
    }
    const url = "ContentFiles/Pictures/" + key + ".svg";
    const response = await fetch(url, {});
    const text = await response.text();
    this.setState({ svg: text });
    sessionStorage.setItem(key, text);
    console.log(url);
  }

  async loadText() {
    const key = this.state.currentQuote + this.state.currentTab;
    const cachedHits = sessionStorage.getItem(key);
    if (cachedHits) {
      this.setState({ text: cachedHits });
      return;
    }
    const url = "ContentFiles/Quotes/" + key + ".json";
    const response = await fetch(url, {});
    const text = await response.json();
    this.setState({ text: text.text });
    sessionStorage.setItem(key, text.text);
    console.log(url);
  }

  loadSound() {
    const url = "ContentFiles/Sounds/" + this.state.currentSound + "/sound" + this.state.currentTab + ".mp3";
    console.log(url);
    this.setState({ sound: url }, function() {
      this.refs.audio.pause();
      this.refs.audio.load();
    });
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Utstilling</h1>
        </div>
        <React.Fragment>
          <div className="check_box">
            <Group
              btns={this.state.imageBtns}
              onMediaClick={this.onMediaClick}
              name="img"
            />
            <Group
              btns={this.state.quoteBtns}
              onMediaClick={this.onMediaClick}
              name="txt"
            />
            <Group
              btns={this.state.soundBtns}
              onMediaClick={this.onMediaClick}
              name="sound"
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
          <div className="media">
            <Exhibition svg={this.state.svg} text={this.state.text} />
            <audio ref="audio" loop controls><source src={this.state.sound} type="audio/mp3"/></audio>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
