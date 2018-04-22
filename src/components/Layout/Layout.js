import React from 'react';
import Aux from 'src/hoc/Aux';
import PropTypes from 'prop-types';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const Layout = props => (
  <Aux>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}> {props.children}</main>
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
