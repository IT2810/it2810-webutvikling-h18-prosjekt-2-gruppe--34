import React, { Component } from "react";
import $ from "jquery";

class Image extends Component {
  constructor(props){
    super(props)

    this.state = {
      url: this.props.url,
    }
  }

  componentDidMount(){
    console.log(this.state.url)
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props.url);
    let el = $(".box");
    fetch(this.props.url)
      .then(res => res.text())
      .then(svg => {
        el.html(this.props.url);
      })
      .catch(console.error.bind(console));
  }


  render() {
    return (
      <div>
        <p>{this.state.url}</p>
      </div>
    );
  }
}

export default Image;
