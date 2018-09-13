import React from 'react';
import PropTypes from 'prop-types';
import radiobtnstekst from './radiobtnstekst';
import radiobtnsbilde from './radiobtnsbilde';
import Radiobtn from './Radiobtn';
import $ from 'jquery';

class RadiobtnContainer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            checkedItems: new Map(),
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;

        this.setState(prevState => ({checkedItems: prevState.checkedItems.set("123", isChecked)}));
        console.log(this.state.checkedItems);

        let url = '/ContentFiles/Quotes/'+ e.target.value.toString() + Math.floor(1 + Math.random() * 4).toString() + '.json';


        /* Denne if-testen brukes for å laste inn teksten med AJAX kall til JSON filer. */
        if (isChecked && (item == 'Tekst')) {
                $.getJSON(url, function (data) {
                    let text = data.text;
                    console.log(text);
                    this.props.callbackFromParent(text);
                    $(document).ready(function(){
                        $('.tekst').text(text);
                    });
                });
        }

        /* Denne koden laster inn bildene med AJAX kall på SVG bildene. */
        if (isChecked && (item == 'Bilde')) {
          let url_2 = '/ContentFiles/Pictures/'+ e.target.value.toString() + Math.floor(1 + Math.random() * 4).toString() + '.svg';
          $.get(url_2, function(data) {
            let svgDataFromChild = data.text;          });

            /*$.getJSON(url, function (data) {
                let text = data.text;

                console.log(text);
                $(document).ready(function(){
                    $('.tekst').text(text);
                });
            }); */
            console.log('FIKS KODE FOR BILDER');
        }

    }
      render() {
      return (
            <React.Fragment>
                <div className="radiobtns">
                {
                    radiobtnstekst.map(item => (
                        <React.Fragment>
                        <div className="btnItem">
                        <label key={item.key}>
                            {item.label}
                            <Radiobtn name={item.name}
                                      value={item.value}
                                      onChange={this.handleChange.bind(this)}/>
                        </label>
                        </div>
                        </React.Fragment>

                    ))
                }
                {

                    radiobtnsbilde.map(item => (
                        <React.Fragment>
                        <div className="btnItem">
                        <label key={item.key} >
                        {item.label}
                        <Radiobtn name={item.name}
                                  value={item.value}
                                  onChange={this.handleChange.bind(this)}  />
                        </label>
                        </div>
                        </React.Fragment>

                    ))
                }
                </div>
            </React.Fragment>
        );
    }
}

export default RadiobtnContainer;
