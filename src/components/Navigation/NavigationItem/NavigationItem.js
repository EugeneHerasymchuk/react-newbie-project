import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavigationItem, activeNavLink } from './NavigationItem.css';

const navigationItem = ({ link, title }) => {
  return (
    <li className={NavigationItem}>
      <NavLink to={link} exact activeClassName={activeNavLink}>
        {title}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default navigationItem;
