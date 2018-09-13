import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <Content />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
