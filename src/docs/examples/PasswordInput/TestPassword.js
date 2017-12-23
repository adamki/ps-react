import React from 'react';
import PasswordInput from 'ps-react/PasswordInput';

/** Testing all features*/
class TestPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    }
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return(
      <div>
        <PasswordInput
          required
          htmlId='password'
          name='Password'
          label='Password'
          onChange={event => this.setState({password: event.target.value})}
          minLength={8}
          value={this.state.password}
          showVisibilityToggle
          placeholder='Enter a Password...'
          quality={this.getQuality()}
          {...this.props} />
      </div>
    )
  }
}

export default TestPassword;
