import React, { Component } from 'react';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          onChangeIngredient={this.changeIngredientHandler}
          ingredients={Object.keys(this.state.ingredients)}
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

    this.setState({
      ingredients: newPropsIngredients
    });
  };
}

export default BurgerBuilder;
