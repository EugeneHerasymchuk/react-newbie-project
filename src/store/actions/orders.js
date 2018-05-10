import api from 'src/services/ApiService';
import to from 'await-to-js';

import {
  FETCH_ORDERS,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAIL
} from '../actions/actionTypes';

export const fetchOrdersFailed = error => {
  return {
    type: FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: FETCH_ORDERS,
    orders
  };
};

export const fetchOrders = token => {
  return async dispatch => {
    let err, response;
    dispatch(fetchOrdersStart());

    [err, response] = await to(
      api.get(token ? '/orders.json?auth=' + token : '/orders.json')
    );

    if (err) {
      dispatch(fetchOrdersFailed(err.response.data.error));
    } else {
      dispatch(fetchOrdersSuccess(response.data));
    }
  };
};
