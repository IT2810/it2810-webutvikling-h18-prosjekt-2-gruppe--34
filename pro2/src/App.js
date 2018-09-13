import React, { Component } from 'react';
import './App.css';
import './index.css';
import RadiobtnContainer from './Components/RadiobtnContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
            <h1>UTSTILLINGSTITTEL</h1>
        </div>
        <div id="button" className="tab1"></div>
        <div id="button" className="tab2"></div>
        <div id="button" className="tab3"></div>
        <div id="button" className="tab4"></div>
        <div className="content">
          <p>CONTENT</p>
          <div className="picture_box">
          <img src="./favicon.ico" alt="Space Doggo"/>
          </div>
          <div className="quote_box">
            <p>MICHAEL SCOTT</p>
          </div>
        </div>
        <div className="check_box">
          <p>CHECKBOX</p>
            <RadiobtnContainer/>

        </div>
        <div className="footer">
          <h2>FOOTER</h2>
        </div>
      </div>
    );
  }
}

export default App;
