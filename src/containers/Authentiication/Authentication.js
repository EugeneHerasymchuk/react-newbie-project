import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AuthenticationClass } from './Authentication.css';

class Authentication extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <a>Hey man</a>
      </div>
    );
  }
}

export default connect()(Authentication);
