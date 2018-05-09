import { LOGIN_USER, LOGOUT_USER, AUTH_FAIL } from '../actions/actionTypes';

const initialState = {
  isAuth: true,
  token: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        error: null,
        token: action.token
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        token: null,
        error: null
      };
    case AUTH_FAIL:
      return {
        ...state,
        token: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
