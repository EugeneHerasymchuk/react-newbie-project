import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { clearState } from 'src/store/actions/order';

import Burger from 'src/components/Burger/Burger';
import { CheckoutContainer } from './Checkout.css';
import ContactData from 'src/components/ContactData/ContactData';
import api from 'src/services/ApiService';

class Checkout extends Component {
  state = {
    loading: false
  };

  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    ingredients: PropTypes.object,
    totalPrice: PropTypes.number,
    clearState: PropTypes.func
  };

  makeCheckoutHandler = async contactData => {
    this.setState({
      loading: true
    });

    await api.post('/orders.json', {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: contactData
    });

    this.setState({
      loading: false
    });

    // Clear the state
    this.props.clearState();

    // Redirect to Burger Builder
    this.props.history.push('/');
  };

  render() {
    return (
      <div className={CheckoutContainer}>
        <Burger ingredients={this.props.ingredients} />
        <ContactData makeOrder={this.makeCheckoutHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearState: () => dispatch(clearState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
