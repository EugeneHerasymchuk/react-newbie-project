import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { clearState } from 'src/store/actions/order';

import errorHandler from 'src/hoc/errorHandler/errorHandler';
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

    await api.post('/orders.jon', {
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
    let checkout = <Redirect to="/" />;
    if (this.props.totalPrice > 2) {
      checkout = (
        <div className={CheckoutContainer}>
          <Burger ingredients={this.props.ingredients} />
          <ContactData makeOrder={this.makeCheckoutHandler} />
        </div>
      );
    }

    return checkout;
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

export default connect(mapStateToProps, mapDispatchToProps)(
  errorHandler(Checkout, api)
);
