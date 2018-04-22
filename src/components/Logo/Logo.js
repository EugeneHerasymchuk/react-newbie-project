import React from 'react';
import logoImage from '../../assets/images/logo.ico';

import classes from './Logo.css';

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImage} alt="Burger App" />
    </div>
  );
};

export default logo;
