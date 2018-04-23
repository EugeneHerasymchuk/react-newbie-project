import React, { Component } from 'react';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';
import BurgerOrderModal from '../../components/BurgerOrderModal/BurgerOrderModal';
import api from 'src/services/ApiService';
import to from 'await-to-js';
import errorHandler from 'src/hoc/errorHandler/errorHandler';

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
    modalShown: false,
    loading: false
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
          loading={this.state.loading}
          closeModalHandler={this.closeModalHandler}
          successModalHandler={this.makeOrderHandler}
          totalPrice={this.state.totalPrice}
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
    this.setState({
      modalShown: false
    });
  };

  makeOrderHandler = async () => {
    this.setState({
      loading: true
    });

    await to(
      api.post('/orders', {
        ingredients: this.state.ingredients,
        totalPrice: this.state.totalPrice,
        customer: {
          name: 'Mark Twen',
          status: 'guest',
          hasDiscount: false
        }
      })
    );

    this.setState({
      loading: false
    });

    this.cleanState();
    this.closeModalHandler();
  };

  cleanState = () => {
    const emptyIngredients = { ...this.state.ingredients };

    for (let key in emptyIngredients) {
      emptyIngredients[key] = 0;
    }

    // Reset the state to default
    this.setState({
      ingredients: emptyIngredients,
      totalPrice: this.state.startPrice,
      purchasable: false
    });
  };

  changeIngredientHandler = (key, isRaise) => {
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

export default errorHandler(BurgerBuilder, api);
