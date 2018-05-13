import React, { Component } from 'react';
import Layout from 'src/components/Layout/Layout';
import BurgerBuilder from 'src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'src/containers/Checkout/Checkout';
import Orders from 'src/containers/Orders/Orders';
import Authentication from 'src/containers/Authentiication/Authentication';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import burgerOrder from './store/reducers/order';
import orders from './store/reducers/orders';
import auth from './store/reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider
        store={createStore(
          combineReducers({
            burgerOrder,
            orders,
            auth
          }),
          composeEnhancers(applyMiddleware(thunkMiddleware))
        )}
      >
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/auth" exact component={Authentication} />
            <Redirect to="/" />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
