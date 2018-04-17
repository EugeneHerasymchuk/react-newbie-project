import React, { Component } from 'react';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';

class BurgerBuilder extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Aux>
        <Burger />
        <div> Burger controls </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
