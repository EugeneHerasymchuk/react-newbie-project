import React from 'react';
import BurgerItemFactory from './BurgerItemFactory/BurgerItemFactory';

import classes from './Burger.css';

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerItemFactory type={'bread-top'} />
      <BurgerItemFactory type={'meat'} />
      <BurgerItemFactory type={'salad'} />
      <BurgerItemFactory type={'meat'} />
      <BurgerItemFactory type={'cheese'} />
      <BurgerItemFactory type={'bread-bottom'} />
    </div>
  );
};

export default Burger;
