import React from 'react';
import PropTypes from 'prop-types';

import { Label, Plus, Minus, BurgerControlItem } from './BurgerControlItem.css';

const burgerControlItem = props => {
  return (
    <div className={BurgerControlItem}>
      <span className={Label}>{props.label}</span>
      <button
        className={Plus}
        onClick={() => {
          props.onChangeCount(true);
        }}
      >
        +
      </button>
      <button
        className={Minus}
        onClick={() => {
          props.onChangeCount(false);
        }}
      >
        -
      </button>
    </div>
  );
};

burgerControlItem.propTypes = {
  label: PropTypes.string,
  onChangeCount: PropTypes.func
};

export default burgerControlItem;
