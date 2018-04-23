import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderModal from '../OrderModal/OrderModal';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import { ProgressCircle } from './BurgerOrderModal.css';

class BurgerOrderModal extends Component {
  static propTypes = {
    modalShown: PropTypes.bool.isRequired,
    closeModalHandler: PropTypes.func.isRequired,
    successModalHandler: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
    children: PropTypes.any,
    loading: PropTypes.bool.isRequired
  };

  shouldComponentUpdate(nextProps) {
    // Do not render if it's not shown
    return (
      nextProps.modalShown !== this.props.modalShown ||
      this.props.loading !== nextProps.loading
    );
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
        {this.props.loading ? (
          <ProgressBar
            className={ProgressCircle}
            type="circular"
            mode="indeterminate"
            multicolor
          />
        ) : (
          <div>
            <span> Total price: ${this.props.totalPrice} </span>
            {ingredientsList}
          </div>
        )}
      </OrderModal>
    );
  }
}

export default BurgerOrderModal;
