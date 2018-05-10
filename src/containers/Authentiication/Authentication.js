import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AuthenticationClass } from './Authentication.css';

import { logoutUser, signUp, signIn } from 'src/store/actions/auth';

class Authentication extends Component {
  static propTypes = {
    isAuth: PropTypes.bool,
    logout: PropTypes.func,
    history: PropTypes.object,
    signIn: PropTypes.func,
    signUp: PropTypes.func
  };

  state = {
    email: null,
    password: null,
    isFormForSignIn: true
  };

  componentWillMount() {
    if (this.props.isAuth) {
      this.logoutUser();
    }
  }

  logoutUser = () => {
    console.log(this.props);
    this.props.logout();

    this.redirectToHomePage();
  };

  redirectToHomePage = () => {
    this.props.history.push('/');
  };

  submitFormHandler = () => {
    if (this.state.isFormForSignIn) {
      this.props.signIn(this.state.email, this.state.password);
    } else {
      this.props.signUp(this.state.email, this.state.password);
    }
    this.redirectToHomePage();
  };

  changeFormHandler = (name, value) => {
    console.log(name, value);
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div className={AuthenticationClass}>
        <input
          placeholder="Email"
          type="email"
          onChange={e => {
            this.changeFormHandler('email', e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="text"
          onChange={e => {
            this.changeFormHandler('password', e.target.value);
          }}
        />
        <input
          type="checkbox"
          onChange={() => {
            this.changeFormHandler(
              'isFormForSignIn',
              !this.state.isFormForSignIn
            );
          }}
        />
        <button onClick={this.submitFormHandler}>
          {this.state.isFormForSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    signIn: (email, password) => dispatch(signIn(email, password)),
    signUp: (email, password) => dispatch(signUp(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
