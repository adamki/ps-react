import React from 'react';
import PropTypes from 'prop-types';

/** standard Label*/
function Label({htmlFor, label, required}) {
  return (
    <label htmlFor={htmlFor} style={{display: 'block'}}>
      {label} {required && <span style={{color: 'red'}}>*</span>}
    </label>
  )
}

Label.propTypes = {
  /** HTML ID for associated input*/
  htmlFor: PropTypes.string.isRequired,
  /** Label Text*/
  label: PropTypes.string.isRequired,
  /** Display asterisk if field is mandatory*/
  required: PropTypes.bool
}

export default Label;
