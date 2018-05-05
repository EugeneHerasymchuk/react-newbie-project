import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Burger from 'src/components/Burger/Burger';
import { CheckoutContainer } from './Checkout.css';
import ContactData from 'src/components/ContactData/ContactData';
import api from 'src/services/ApiService';

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
    loading: false
  };

  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  };

  makeCheckoutHandler = async contactData => {
    this.setState({
      loading: true
    });

    console.log(contactData);

    await api.post('/orders.json', {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: contactData
    });

    this.setState({
      loading: false
    });

    // Redirect to Burger Builder
    this.props.history.push({
      pathname: '/'
    });
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const paramsIngredients = {};
    let price = 0;
    for (let param of queryParams) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        paramsIngredients[param[0]] = +param[1];
      }
    }

    this.setState({
      ingredients: paramsIngredients,
      totalPrice: price
    });
  }

  render() {
    return (
      <div className={CheckoutContainer}>
        <Burger ingredients={this.state.ingredients} />
        <ContactData makeOrder={this.makeCheckoutHandler} />
      </div>
    );
  }
}

export default Checkout;
