import React, { Component } from 'react';

import { CheckoutContainer } from './Checkout.css';

class Checkout extends Component {
  render() {
    return (
      <div className={CheckoutContainer}>
        <span>This is a Checkout component</span>
        <button>Make Checkout</button>
      </div>
    );
  }
}

export default Checkout;
