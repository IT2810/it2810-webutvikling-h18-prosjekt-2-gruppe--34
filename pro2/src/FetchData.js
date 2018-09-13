import React from 'react';
import ReactDOM from 'react-dom';

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      name: this.name
    };
  }

  componentDidMount(name) {
    fetch("ContentFiles/Quotes_Einstein/" + name + ".json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const error = this.state;
    const isLoaded = this.state;
    const items = this.state;
    if(error){
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading....</div>
    } else{
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.text}
            </li>
          ))}
          </ul>
      );
    }
  }
}

export default FetchData;
