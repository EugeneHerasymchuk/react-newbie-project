import React, { Component } from 'react';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';
import BurgerOrderModal from '../../components/BurgerOrderModal/BurgerOrderModal';

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
    purchasable: false,
    modalShown: false
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
          onOrderClick={this.orderClickHandler}
        />
        <BurgerOrderModal
          ingredients={this.state.ingredients}
          modalShown={this.state.modalShown}
          closeModalHandler={this.closeModalHandler}
          successModalHandler={this.makeOrderHandler}
        />
      </Aux>
    );
  }

  orderClickHandler = () => {
    this.setState({
      modalShown: true
    });
  };

  closeModalHandler = () => {
    console.log('close');

    this.setState({
      modalShown: false
    });
  };

  makeOrderHandler = () => {
    console.log('sent API call for making the order');

    const emptyIngredients = { ...this.state.ingredients };

    for (let key in emptyIngredients) {
      emptyIngredients[key] = 0;
    }

    this.setState({
      ingredients: emptyIngredients
    });

    this.closeModalHandler();

    alert('Your order is done. Wait for it');
  };

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
