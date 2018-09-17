import React, { Component } from "react";
import Quote from "./quote";
import Sound from "./sound";
import Image from "./image";

class Tab extends Component {
  state = {};
  render() {
    return (
      <div id={this.props.id}>
        <p>{this.props.id}</p>
        <Image url={this.props.imgurl} />
        <Sound url={this.props.soundurl} />
        <Quote url={this.props.quoteurl} />
      </div>
    );
  }
}

export default Tab;
