import React, { Component } from 'react';
import Layout from 'src/components/Layout/Layout';
import BurgerBuilder from 'src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'src/containers/Checkout/Checkout';
import Orders from 'src/containers/Orders/Orders';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/orders" exact component={Orders} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
