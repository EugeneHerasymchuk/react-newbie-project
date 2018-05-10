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
    orders: PropTypes.object,
    token: PropTypes.any
  };

  async componentDidMount() {
    // Get Orders from Database
    this.props.fetchOrders(this.props.token);
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
    error: state.orders.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: token => dispatch(fetchOrders(token))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
