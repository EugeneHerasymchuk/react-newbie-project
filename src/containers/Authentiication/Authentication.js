import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AuthenticationClass } from './Authentication.css';

import { logoutUser } from 'src/store/actions/auth';

class Authentication extends Component {
  static propTypes = {
    isAuth: PropTypes.bool,
    logout: PropTypes.func,
    history: PropTypes.object
  };

  componentWillMount() {
    if (this.props.isAuth) {
      this.logoutUser();
    }
  }

  logoutUser = () => {
    console.log(this.props);
    this.props.logout();

    this.props.history.push('/');
  };

  render() {
    return (
      <div className={AuthenticationClass}>
        <a>Hey man</a>
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
    logout: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
