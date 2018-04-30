import React, { Component } from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';

import { Contact } from './ContactData.css';

class ContactData extends Component {
  state = {
    name: {
      type: 'input',
      label: 'Label',
      value: '',
      rules: {
        maxLength: 10
      },
      isValid: true,
      touched: false
    },
    email: {
      type: 'input',
      label: 'Email',
      value: '',
      rules: {
        minLength: 4,
        maxLength: 10
      },
      isValid: true,
      touched: false
    },
    delivering: {
      type: 'select',
      label: 'Delivering type',
      options: [
        { name: 'cheapest', displayName: 'Cheapest' },
        { name: 'fastest', displayName: 'Fastest' }
      ],
      isValid: true,
      value: ''
    },
    formIsDisabled: true
  };

  static propTypes = {
    makeOrder: PropTypes.func.isRequired
  };

  handleChangeForm = (name, e) => {
    this.setState(
      {
        [name]: {
          ...this.state[name],
          value: e.target.value,
          touched: true,
          isValid: this._isValid(name, e.target.value)
        }
      },
      () => {
        this._calculateValidity();
      }
    );
  };
  makeOrderHandler = () => {
    const payloadData = Object.keys(this.state).map(key => {
      return {
        [key]: this.state[key].value
      };
    });

    this.props.makeOrder(payloadData);
  };

  _calculateValidity = () => {
    this.setState({
      formIsDisabled: !(
        this.state.name.value &&
        this.state.name.isValid &&
        this.state.email.value &&
        this.state.email.isValid
      )
    });
  };

  _isValid = (fieldName, value) => {
    if (
      this.state[fieldName].rules &&
      this.state[fieldName].rules.maxLength &&
      value.length > this.state[fieldName].rules.maxLength
    ) {
      return false;
    }

    if (
      this.state[fieldName].rules &&
      this.state[fieldName].rules.minLength &&
      value.length < this.state[fieldName].rules.minLength
    ) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <div className={Contact}>
        <Input
          label="Label"
          type="input"
          value={this.state.name.value}
          isValid={this.state.name.isValid}
          onChange={e => {
            this.handleChangeForm('name', e);
          }}
          maxLength={16}
        />
        <Input
          type="input"
          label="Email address"
          value={this.state.email.value}
          isValid={this.state.email.isValid}
          onChange={e => {
            this.handleChangeForm('email', e);
          }}
        />
        <Input
          type="select"
          label="Choose the delivering type"
          value={this.state.delivering.value}
          isValid={this.state.delivering.isValid}
          options={this.state.delivering.options}
          onChange={e => {
            this.handleChangeForm('delivering', e);
          }}
        />
        <Button
          label="Make checkout"
          raised
          disabled={this.state.formIsDisabled}
          primary
          onClick={this.makeOrderHandler}
        />
      </div>
    );
  }
}

export default ContactData;
