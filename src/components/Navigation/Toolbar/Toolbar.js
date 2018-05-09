import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import AuthenticateButton from '../AuthenticateButton/AuthenticateButton';

import { Toollbar, NavigationItems } from './Toolbar.css';

const toolbar = () => {
  return (
    <header className={Toollbar}>
      <div>MENU</div>
      <Logo />
      <ul className={NavigationItems}>
        <NavigationItem link="/" title="Burger Builder" />
        <NavigationItem link="/orders" title="Orders" />
        <NavigationItem link="/auth">
          <AuthenticateButton />
        </NavigationItem>
      </ul>
    </header>
  );
};

toolbar.propTypes = {};

export default toolbar;
