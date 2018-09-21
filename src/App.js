import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Group from "./Components/group";
import TabContainer from "./Components/tabContainer";
import Exhibition from "./Components/exhibition";

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
      { id: "scott", name: "txt" }
    ],
    soundBtns: [
      { id: "random1", name: "sound" },
      { id: "random2", name: "sound" },
      { id: "random3", name: "sound" }
    ],
    tabs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  };

  constructor() {
    super();
    this.onMediaClick = this.onMediaClick.bind(this);
    this.tabPicker = this.tabPicker.bind(this);
  }

  /**
   * Setter state på mediatype som er valgt til det som trykkes på av radiobuttons i hver sjanger
   * og laster inn den nye mediatypen som velges på nytt.
   */

  onMediaClick(e) {
    if (e.target.name === "img") {
      this.setState({ currentImg: e.target.id }, function() {
        this.loadPicture();
      });
    } else if (e.target.name === "txt") {
      this.setState({ currentQuote: e.target.id }, function() {
        this.loadText();
      });
    } else if (e.target.name === "sound") {
      this.setState({ currentSound: e.target.id }, function() {
        this.loadSound();
      });
    }
  }

  /**
   * Tar inn en tab som blir trykket på. Setter currentTab til den tabben som blir trykket på og laster
   * inn en ny kombinasjon av medievalgene som er gjort av brukeren.
   * @param {*} e
   */
  tabPicker(e) {
    this.setState({ currentTab: e.target.id }, function() {
      this.loadPicture();
      this.loadText();
      this.loadSound();
    });
  }

  /**
   * Lager en nøkkel bestaaende av bilde/tab kombinasjon som lagres til cache som key.
   * Bruker bilde/tab kombinasjon til å laste forskjellig bilder i hver sjanger til hver tab.
   * henter bilde fra ContentFiles mappen med key kombinasjonen, og setter tilstanden til appen med det.
   */

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
  }

  /**
   *  Lager en nøkkel bestaaende av text/tab kombinasjon som lagres til cache som key.
   * Bruker text/tab kombinasjon til å laste forskjellig quotes i hver sjanger til hver tab.
   * henter text fra ContentFiles mappen med key kombinasjonen, og setter tilstanden til appen med det.
   */
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
  }

  /**
   * Henter url fra ContentFiles.
   * Caches ikke fordi filene er store og det ikke er spesifisert i oppgaven
   */

  loadSound() {
    const url =
      "ContentFiles/Sounds/" +
      this.state.currentSound +
      "/sound" +
      this.state.currentTab +
      ".mp3";
    this.setState({ sound: url }, function() {
      this.refs.audio.pause();
      this.refs.audio.load();
    });
  }

  /**
   * Laster inn bilde, lyd og text ved oppstart.
   * Sammen med setAttribute i index.js laster dette media av det som er satt som checked.
   */
  componentDidMount() {
    this.loadPicture();
    this.loadSound();
    this.loadText();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Utstilling</h1>
          <span id="audioControls">
            <button onClick={() => document.getElementById("audio").play()}>
              Play
            </button>
            <button onClick={() => document.getElementById("audio").pause()}>
              Pause
            </button>
          </span>
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
            <audio id="audio" ref="audio" loop>
              <source src={this.state.sound} type="audio/mp3" />
            </audio>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
