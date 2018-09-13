import React, { Component } from 'react';
import '../style.css';
import RadiobtnContainer from './RadiobtnContainer.js';

class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="display_area">
                    <RadiobtnContainer/>

            </div>
                <label className="tekst">
                    Hei
                </label>

            </React.Fragment>
        )
    }
}

export default Content;