import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerItemFactory.css';

const BurgerItemFactory = props => {
  switch (props.type) {
    case 'bread-bottom':
      return <div className={classes.BreadBottom} />;
    case 'bread-top':
      return <div className={classes.BreadTop} />;
    case 'meat':
      return <div className={classes.Meat} />;
    case 'salad':
      return <div className={classes.Salad} />;
    case 'cheese':
      return <div className={classes.Cheese} />;
    default:
      return null;
  }
};

BurgerItemFactory.propTypes = {
  type: PropTypes.oneOf([
    'bread-bottom',
    'bread-top',
    'meat',
    'salad',
    'cheese'
  ])
};

export default BurgerItemFactory;
