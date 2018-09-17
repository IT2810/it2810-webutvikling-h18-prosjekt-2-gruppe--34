import React, { Component } from "react";

class Image extends Component {

  componentDidMount(){
    /* console.log(this.state.url) KOMMENTERTE UT DETTE PÅ GRUNN AV SPAM I CONSOLE */
  }

  async componentDidUpdate(prevProps, prevState){
   /* console.log(this.props.url); KOMMENTERTE UT DETTE PÅ GRUNN AV SPAM I CONSOLE */
  }



  render() {
    return (
      <div>
        <svg className="picture_box" dangerouslySetInnerHTML={{__html: this.props.svg }}></svg>
      </div>
    );
  }
}

export default Image;
