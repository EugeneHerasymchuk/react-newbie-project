import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderModal from '../OrderModal/OrderModal';

class BurgerOrderModal extends Component {
  static propTypes = {
    modalShown: PropTypes.bool.isRequired,
    closeModalHandler: PropTypes.func.isRequired,
    successModalHandler: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired
  };

  shouldComponentUpdate(nextProps) {
    // Do not render if it's not shown
    return nextProps.modalShown !== this.props.modalShown;
  }

  render() {
    const ingredientsList = Object.keys(this.props.ingredients).map(key => {
      return (
        <span key={key}>
          {key} : {this.props.ingredients[key]}{' '}
        </span>
      );
    });

    return (
      <OrderModal
        title={'Finish your order'}
        visible={this.props.modalShown}
        onCancel={this.props.closeModalHandler}
        onSuccess={this.props.successModalHandler}
        cancelButtonText={'Cancel'}
        successButtonText={'Order'}
      >
        <div>Total price: ${this.props.totalPrice}</div>
        {ingredientsList}
      </OrderModal>
    );
  }
}

export default BurgerOrderModal;
