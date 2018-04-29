import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';

import { Contact } from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: ''
  };

  static propTypes = {
    makeOrder: PropTypes.func.isRequired
  };

  handleChangeForm = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div className={Contact}>
        <Input
          type="text"
          label="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeForm.bind(this, 'name')}
          maxLength={16}
        />
        <Input
          type="email"
          label="Email address"
          value={this.state.email}
          onChange={this.handleChangeForm.bind(this, 'email')}
        />
        <Button
          label="Make checkout"
          raised
          primary
          onClick={() => {
            this.props.makeOrder(this.state);
          }}
        />
      </div>
    );
  }
}

export default ContactData;
