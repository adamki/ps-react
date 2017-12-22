import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** A TextInput with integrated labelto enforce consistency in lyaout, error display, label plavement, and required field marker*/
function TextInput({htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props}) {
  return(
    <div style={{}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && {border: 'solid 1px red'}}
        {...props} />
        {children}
        {error && <div className="error" style={{colod: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing*/
  htmlId: PropTypes.string.isRequired,

  /** Input name. REcommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /**Input Label */
  label: PropTypes.string.isRequired,

  /** input type */
  type: PropTypes.string.isRequired,

  /** Mark Label with asterisk if set to true */
  required: PropTypes.bool,

  /** function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next ot he input */
  children: PropTypes.node
}

export default TextInput;
