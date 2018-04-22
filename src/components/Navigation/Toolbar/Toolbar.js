import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';

import classes from './Toolbar.css';

const toolbar = () => {
  return (
    <header className={classes.Toollbar}>
      <div>MENU</div>
      <Logo />
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" title="Burger Builder" />
        <NavigationItem link="/" title="Checkout" />
      </ul>
    </header>
  );
};

toolbar.propTypes = {};

export default toolbar;
