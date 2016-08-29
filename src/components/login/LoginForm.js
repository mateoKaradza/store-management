import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      isWorking: false,
    };

    this.updateState = this.updateState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password, this.props.redirect);
  }

  updateState(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          label={'Username'}
          stateKey={'username'}
          value={username}
          type={'text'}
          required
          onChange={this.updateState}
        />
        <Input
          label={'Password'}
          stateKey={'password'}
          value={password}
          type={'password'}
          required
          onChange={this.updateState}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  err: PropTypes.string,
};

export default LoginForm;
