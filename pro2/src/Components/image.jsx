import React, { Component } from "react";
import $ from "jquery";

class Image extends Component {
  constructor(props){
    super(props)
    this.test = this.test.bind(this);
    this.state = {
      url: this.props.url,
      svg: "nothing found"
    }
  }

  componentDidMount(){
    console.log(this.state.url)
  }

  async componentDidUpdate(prevProps, prevState){
    console.log(this.props.url);

  }

async test() {
  const response = await fetch(this.props.url, {});
  const text = await response.text();
  this.setState({svg: text});
}

  render() {
    return (
      <div>
        <button onClick={this.test}>click me</button>
        <svg dangerouslySetInnerHTML={{__html: this.state.svg }}></svg>
      </div>
    );
  }
}

export default Image;
