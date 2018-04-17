import React from 'react';
import Aux from 'src/hoc/Aux';
import PropTypes from 'prop-types';

const Layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>,
    <main> {props.children}</main>
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
