import React, { Component } from 'react';
import api from 'src/services/ApiService';
import Order from 'src/components/Order/Order';

import { Orders } from './Orders.css';

class Checkout extends Component {
  state = {
    orders: {},
    loading: false
  };

  async componentDidMount() {
    // Get Orders from Database
    const orders = (await api.get('/orders.json')).data;

    console.log(orders);

    this.setState({
      orders: orders
    });
  }

  render() {
    console.log(this.state.orders);
    const orders = Object.keys(this.state.orders).map(orderKey => {
      return <Order key={orderKey} orderData={this.state.orders[orderKey]} />;
    });
    console.log(orders);
    return <div className={Orders}>{orders}</div>;
  }
}

export default Checkout;
