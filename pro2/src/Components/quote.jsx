import React, { Component } from "react";

class Quote extends Component {

    componentDidMount(){
      /*  console.log(this.state.url) KOMMENTERTE UT DETTE PÅ GRUNN AV SPAM I CONSOLE */
    }

    async componentDidUpdate(prevProps, prevState){
        /* console.log(this.props.url); KOMMENTERTE UT DETTE PÅ GRUNN AV SPAM I CONSOLE */
    }



  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Quote;
