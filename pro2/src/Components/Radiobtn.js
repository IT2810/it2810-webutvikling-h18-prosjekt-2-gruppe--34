import React from 'react';
import PropTypes from 'prop-types';

const Radiobtn = ({ type = 'radio', name, value, onChange }) => (
    <input type={type} name={name} value={value} onChange={onChange} />
);

Radiobtn.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}

export default Radiobtn;