import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';

/** Input field for user passwords*/
class PasswordInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showPassword: false}
  }

  toggleShowPassword = event => {
    this.setState(prevState => {
      return {showPassword: !prevState.showPassword};
    });

    if (event) event.preventDefault();
  }

  render() {
    const {htmlId, showVisibilityToggle, name, label, value, quality, onChange, placeholder, required, error, maxLength, ...props} = this.props;
    const {showPassword} = this.state;

    return(
      <TextInput
        type={showPassword ? 'text' : 'password'}
        required={required}
        htmlId={htmlId}
        name={name}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        maxLength={maxLength}
        {...props}>
        {
          showVisibilityToggle &&
          <a
            href="#"
            onClick={this.toggleShowPassword}
            style={{ marginLeft: 5 }} >
            <EyeIcon />
          </a>
        }
        {
          value.length > 0 &&  quality && <ProgressBar percent={quality} width={130} />
        }
      </TextInput>
    )
  }
}

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password'
}

PasswordInput.propTypes = {
  /** Uniq HTML ID. Used for tying the label to HTML Input. Handy hook for automated testing*/
  htmlId: PropTypes.string.isRequired,

  /** Input name. REcommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** password value */
  value: PropTypes.any,

  /**Input Label */
  label: PropTypes.string.isRequired,

  /** function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Validatoni Error to display*/
  error: PropTypes.string,

  /** maximum length of password accepted */
  maxLength: PropTypes.number,

  /** set to true to show the toggle for displaying the currently entered password*/
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar. Accepts number between 0 - 100*/
  quality: PropTypes.number
}


export default PasswordInput;
