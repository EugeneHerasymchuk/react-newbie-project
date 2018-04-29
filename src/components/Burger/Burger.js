import React from 'react';
import PropTypes from 'prop-types';
import BurgerItemFactory from './BurgerItemFactory/BurgerItemFactory';

import classes from './Burger.css';

const Burger = props => {
  let mappedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key] || 0)].map((_, i) => (
        <BurgerItemFactory key={i + i + key} type={key} />
      ));
    })
    .reduce((acc, cur) => acc.concat(cur), []);

  if (mappedIngredients.length < 1) {
    mappedIngredients = 'Start choosing your ingredients';
  }
  return (
    <div className={classes.Burger}>
      <BurgerItemFactory type={'bread-top'} />
      {mappedIngredients}
      <BurgerItemFactory type={'bread-bottom'} />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
