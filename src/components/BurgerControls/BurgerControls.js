import React from 'react';
import PropTypes from 'prop-types';
import BurgerControlItem from './BurgerControlItem/BurgerControlItem';
import { Button } from 'react-toolbox/lib/button';

import { BurgerControls, Price, OrderButton } from './BurgerControls.css';

const burgerControls = props => {
  const controlItems = props.ingredients.map(ingredientName => (
    <BurgerControlItem
      key={ingredientName}
      label={ingredientName}
      onChangeCount={isRaise => {
        props.onChangeIngredient(ingredientName, isRaise);
      }}
    />
  ));
  return (
    <div className={BurgerControls}>
      <div className={Price}> {props.price} </div>
      {controlItems}
      <Button
        className={OrderButton}
        label="Order Now"
        raised
        primary
        disabled={!props.isPurchasable}
        onClick={props.onOrderClick}
      />
    </div>
  );
};

burgerControls.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  onChangeIngredient: PropTypes.func,
  price: PropTypes.number,
  isPurchasable: PropTypes.bool,
  onOrderClick: PropTypes.func
};

export default burgerControls;
