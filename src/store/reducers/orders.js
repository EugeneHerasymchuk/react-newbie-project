import {
  FETCH_ORDERS,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAIL
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  orders: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.orders
      };
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
