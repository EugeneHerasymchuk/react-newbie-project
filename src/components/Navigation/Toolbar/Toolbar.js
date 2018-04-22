import React from 'react';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = () => {
  return (
    <header className={classes.Toollbar}>
      <div>MENU</div>
      <Logo />
      <div>...</div>
    </header>
  );
};

toolbar.propTypes = {};

export default toolbar;
