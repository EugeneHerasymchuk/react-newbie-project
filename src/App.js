import React, { Component } from 'react';
import Layout from 'src/components/Layout/Layout';
import BurgerBuilder from 'src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'src/containers/Checkout/Checkout';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
