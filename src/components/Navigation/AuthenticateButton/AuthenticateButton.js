import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from 'react-icons/lib/io/log-in';
import Logout from 'react-icons/lib/io/log-out';

import { AuthButtonClass } from './AuthenticateButton.css';

class AuthButton extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  };
  render() {
    return this.props.isAuth ? (
      <Logout className={AuthButtonClass} />
    ) : (
      <Login className={AuthButtonClass} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(AuthButton);
