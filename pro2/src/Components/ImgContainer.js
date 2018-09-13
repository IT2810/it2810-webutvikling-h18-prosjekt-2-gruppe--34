import React from 'react';

class ImgContainer extends React.Component{
  constructor(props){
    super(props);
    let data = this.props.svgFromParent;
    console.log(data);
  }

  render(){
    return (
      <div>
        <img src="./favicon.ico" alt="Space Doggo"/>
        <p>{this.data}</p>
      </div>
    )
  }
}

export default ImgContainer;
