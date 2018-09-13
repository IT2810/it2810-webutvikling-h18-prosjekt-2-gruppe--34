import React, { Component } from "react";
import "./App.css";
import "./index.css";
import RadiobtnContainer from "./Components/RadiobtnContainer.js";
import TabContainer from "./Components/TabContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>UTSTILLINGSTITTEL</h1>
        </div>
        <TabContainer />
        <div className="content">
          <p>CONTENT</p>
          <div className="picture_box">
            <img src="./favicon.ico" alt="Space Doggo" />
          </div>
          <div className="quote_box">
            <p>MICHAEL SCOTT</p>
          </div>
        </div>
        <div className="check_box">
          <p>CHECKBOX</p>
          <RadiobtnContainer />
        </div>
        <div className="footer">
          <h2>FOOTER</h2>
        </div>
      </div>
    );
  }
}

export default App;
