import React, { Component } from 'react';
import './App.css';
import './index.css';
import RadiobtnContainer from './Components/RadiobtnContainer.js';
import ImgContainer from './Components/ImgContainer.js';
import ContentComponent from './Components/ContentComponent.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      DataFromRadiobtn: null
    };
  }

  myCallback = (dataFromChild) => {
    this.setState({DataFromRadiobtn: dataFromChild});
  }


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
          <ContentComponent textFromParent={this.DataFromRadiobtn}/>
          <div className="picture_box">
            <ImgContainer/>
          </div>
          <div className="quote_box">
            <p>MICHAEL SCOTT</p>
          </div>
        </div>
        <div className="check_box">
          <p>CHECKBOX</p>
            <RadiobtnContainer callbackFromParent={this.myCallback.bind(this)}/>
        </div>
        <div className="footer">
          <h2>FOOTER</h2>
        </div>
      </div>
    );
  }
}

export default App;
