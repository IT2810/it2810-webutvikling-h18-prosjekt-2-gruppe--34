import React, { Component } from "react";
import Quote from "./quote.jsx";
import Image from "./image.jsx";

class Exhibition extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="exhibition">
          <Image svg={this.props.svg} />
          <Quote text={this.props.text} />
        </div>
      </React.Fragment>
    );
  }
}

export default Exhibition;
