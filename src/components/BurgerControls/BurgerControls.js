import React from 'react';
import PropTypes from 'prop-types';
import BurgerControlItem from './BurgerControlItem/BurgerControlItem';

import { BurgerControls, Price } from './BurgerControls.css';

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
      <button disabled={!props.isPurchasable}>Order Now</button>
    </div>
  );
};

burgerControls.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  onChangeIngredient: PropTypes.func,
  price: PropTypes.number,
  isPurchasable: PropTypes.bool
};

export default burgerControls;
