import React from 'react';
import PropTypes from 'prop-types';

import { Order } from './Order.css';

const order = ({ orderData }) => {
  const ingredients = Object.keys(orderData.ingredients)
    .map(key => `${key} (${orderData.ingredients[key]})`)
    .join(', ');

  return (
    <div className={Order}>
      <span> Ingredients: {ingredients} </span>
      <div> Price {orderData.totalPrice}</div>
      <div> Ordered by: {orderData.customer.name}</div>
    </div>
  );
};

order.propTypes = {
  orderData: PropTypes.object
};

export default order;
