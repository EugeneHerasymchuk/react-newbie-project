import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavigationItem, activeNavLink } from './NavigationItem.css';

const navigationItem = ({ link, title, children }) => {
  return (
    <li className={NavigationItem}>
      <NavLink to={link} exact activeClassName={activeNavLink}>
        {title || children}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node
};
export default navigationItem;
