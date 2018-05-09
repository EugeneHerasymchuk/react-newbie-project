import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FaBeer from 'react-icons/lib/fa/beer';

import Order from 'src/components/Order/Order';

import { fetchOrders } from 'src/store/actions/orders';

import { Orders } from './Orders.css';

class OrdersComponent extends Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    error: PropTypes.any,
    loading: PropTypes.bool,
    orders: PropTypes.object
  };

  async componentDidMount() {
    // Get Orders from Database
    console.log('getting');
    this.props.fetchOrders();

    console.log('result');
  }

  render() {
    const orders = Object.keys(this.props.orders).map(orderKey => {
      return <Order key={orderKey} orderData={this.props.orders[orderKey]} />;
    });

    let orderSection = this.props.loading ? (
      <div>Loading</div>
    ) : this.props.error ? (
      <div>
        {' '}
        {this.props.error.toString()} <FaBeer />
      </div>
    ) : (
      orders
    );

    return <div className={Orders}>{orderSection}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    error: state.orders.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
