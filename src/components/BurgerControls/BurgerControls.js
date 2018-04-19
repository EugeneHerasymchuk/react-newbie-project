import React from 'react';
import PropTypes from 'prop-types';
import BurgerControlItem from './BurgerControlItem/BurgerControlItem';

import { BurgerControls } from './BurgerControls.css';

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
      {props.price}
      {controlItems}
    </div>
  );
};

burgerControls.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  onChangeIngredient: PropTypes.func,
  price: PropTypes.number
};

export default burgerControls;
