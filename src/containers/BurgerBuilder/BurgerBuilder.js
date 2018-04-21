import React, { Component } from 'react';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {
  state = {
    prices: {
      salad: 0.6,
      cheese: 1.2,
      meat: 2.2
    },
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    startPrice: 2,
    purchasable: false
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          price={this.state.totalPrice}
          onChangeIngredient={this.changeIngredientHandler}
          ingredients={Object.keys(this.state.ingredients)}
          isPurchasable={this.state.purchasable}
        />
      </Aux>
    );
  }

  changeIngredientHandler = (key, isRaise) => {
    console.log(key, this.state.ingredients[key]);

    let newCountIngredient = isRaise
      ? this.state.ingredients[key] + 1
      : this.state.ingredients[key] - 1;

    newCountIngredient = newCountIngredient < 0 ? 0 : newCountIngredient;

    let newPropsIngredients = {
      ...this.state.ingredients,
      [key]: newCountIngredient
    };

    // Calculate new price and is the order purchasable or not
    let newPrice = Object.keys(newPropsIngredients)
      .map(key => {
        return newPropsIngredients[key] * this.state.prices[key];
      })
      .reduce((acc, cur) => acc + cur, this.state.startPrice);

    this.setState({
      ingredients: newPropsIngredients,
      totalPrice: newPrice,
      purchasable: newPrice > this.state.startPrice
    });
  };
}

export default BurgerBuilder;
