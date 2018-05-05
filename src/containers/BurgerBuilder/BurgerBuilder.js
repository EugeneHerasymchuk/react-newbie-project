import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REMOVE_INGREDIENT, ADD_INGREDIENT } from 'src/store/actions';
import PropTypes from 'prop-types';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';
import BurgerOrderModal from '../../components/BurgerOrderModal/BurgerOrderModal';
import api from 'src/services/ApiService';
import errorHandler from 'src/hoc/errorHandler/errorHandler';

class BurgerBuilder extends Component {
  static propTypes = {
    history: PropTypes.object,
    ingredients: PropTypes.object,
    clearState: PropTypes.func,
    addIngredient: PropTypes.func,
    removeIngredient: PropTypes.func,
    purchasable: PropTypes.bool,
    totalPrice: PropTypes.number
  };

  state = {
    modalShown: false,
    loading: false
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.props.ingredients} />
        <BurgerControls
          price={this.props.totalPrice}
          onChangeIngredient={this.changeIngredientHandler}
          ingredients={Object.keys(this.props.ingredients)}
          isPurchasable={this.props.purchasable}
          onOrderClick={this.orderClickHandler}
        />
        <BurgerOrderModal
          ingredients={this.props.ingredients}
          modalShown={this.state.modalShown}
          loading={this.state.loading}
          closeModalHandler={this.closeModalHandler}
          successModalHandler={this.makeOrderHandler}
          totalPrice={this.props.totalPrice}
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

  makeOrderHandler = () => {
    this.closeModalHandler();

    let queryParams = Object.keys(this.props.ingredients).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(
        this.props.ingredients[key]
      )}`;
    });

    queryParams.push('price=' + this.props.totalPrice);

    this.props.history.push('/checkout');
  };

  changeIngredientHandler = (key, isRaise) => {
    if (isRaise) {
      this.props.addIngredient(key);
    } else if (!isRaise && this.props.ingredients[key] > 0) {
      this.props.removeIngredient(key);
    }
  };
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: name => {
      dispatch({ type: ADD_INGREDIENT, ingredientName: name });
    },
    removeIngredient: name => {
      dispatch({ type: REMOVE_INGREDIENT, ingredientName: name });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  errorHandler(BurgerBuilder, api)
);
