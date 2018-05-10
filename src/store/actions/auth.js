import {
  LOGOUT_USER,
  LOGIN_USER,
  SIGN_UP,
  AUTH_FAIL
} from '../actions/actionTypes';
import { signUpURL, signInURL } from 'src/config/endpoints';

import api from 'src/services/ApiService';
import to from 'await-to-js';

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const signUpUser = token => {
  return { type: SIGN_UP, token };
};

export const signInUser = token => {
  return { type: LOGIN_USER, token };
};

export const authFailed = error => {
  return { type: AUTH_FAIL, error };
};

export const signUp = (email, password) => {
  return async dispatch => {
    let error, response;

    [error, response] = await to(
      api.post(signUpURL, {
        email,
        password,
        returnSecureToken: true
      })
    );

    if (error) {
      dispatch(authFailed(error));
    } else {
      console.log(response.data);
      dispatch(signUpUser(response.data.idToken));
    }
  };
};

export const signIn = (email, password) => {
  return async dispatch => {
    let error, response;

    [error, response] = await to(
      api.post(signInURL, {
        email,
        password,
        returnSecureToken: true
      })
    );

    if (error) {
      dispatch(authFailed(error));
    } else {
      console.log(response.data);
      dispatch(signInUser(response.data.idToken));
    }
  };
};
