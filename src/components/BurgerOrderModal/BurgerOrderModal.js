import React from 'react';
import PropTypes from 'prop-types';
import OrderModal from '../OrderModal/OrderModal';

const BurgerOrderModal = props => {
  const ingredientsList = Object.keys(props.ingredients).map(key => {
    return (
      <span key={key}>
        {' '}
        {key} : {props.ingredients[key]}{' '}
      </span>
    );
  });
  return (
    <OrderModal
      title={'Finish your order'}
      visible={props.modalShown}
      onCancel={props.closeModalHandler}
      onSuccess={props.successModalHandler}
      cancelButtonText={'Cancel'}
      successButtonText={'Order'}
    >
      <div>Total price: ${props.totalPrice}</div>
      {ingredientsList}
    </OrderModal>
  );
};

BurgerOrderModal.propTypes = {
  modalShown: PropTypes.bool,
  closeModalHandler: PropTypes.func,
  successModalHandler: PropTypes.func,
  ingredients: PropTypes.object,
  totalPrice: PropTypes.number
};

export default BurgerOrderModal;
