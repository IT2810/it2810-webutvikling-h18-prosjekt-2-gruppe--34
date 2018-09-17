import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Group from "./Components/group";

class App extends Component {
  state = {
    imageBtns: [{ id: 1 }, { id: 2 }, { id: 3 }],
    quoteBtns: [{ id: 4 }, { id: 5 }, { id: 6 }],
    soundBtns: [{ id: 7 }, { id: 8 }, { id: 9 }]
  };

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
