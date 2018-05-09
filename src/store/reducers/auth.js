import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';

const initialState = {
  isAuth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};

export default reducer;
