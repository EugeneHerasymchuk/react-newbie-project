import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Burger from 'src/components/Burger/Burger';
import { CheckoutContainer } from './Checkout.css';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0
    }
  };

  static propTypes = {
    location: PropTypes.object
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const paramsIngredients = {};
    for (let param of queryParams) {
      paramsIngredients[param[0]] = +param[1];
    }
    console.log(paramsIngredients);

    this.setState({
      ingredients: paramsIngredients
    });
  }

  render() {
    return (
      <div className={CheckoutContainer}>
        <Burger ingredients={this.state.ingredients} />
        <span>This is a Checkout component</span>
        <button>Make Checkout</button>
      </div>
    );
  }
}

export default Checkout;
