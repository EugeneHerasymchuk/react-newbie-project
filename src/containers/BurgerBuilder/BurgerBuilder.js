import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient } from 'src/store/actions/order';
import PropTypes from 'prop-types';
import Aux from 'src/hoc/Aux';
import Burger from 'src/components/Burger/Burger';
import BurgerControls from 'src/components/BurgerControls/BurgerControls';
import BurgerOrderModal from '../../components/BurgerOrderModal/BurgerOrderModal';

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
    ingredients: state.burgerOrder.ingredients,
    totalPrice: state.burgerOrder.totalPrice,
    purchasable: state.burgerOrder.purchasable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: name => {
      dispatch(addIngredient(name));
    },
    removeIngredient: name => {
      dispatch(removeIngredient(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
