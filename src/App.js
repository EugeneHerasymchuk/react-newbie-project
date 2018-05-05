import React, { Component } from 'react';
import Layout from 'src/components/Layout/Layout';
import BurgerBuilder from 'src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'src/containers/Checkout/Checkout';
import Orders from 'src/containers/Orders/Orders';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import order from './store/modules/order';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(order)}>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
