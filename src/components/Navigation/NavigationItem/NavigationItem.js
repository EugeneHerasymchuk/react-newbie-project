import React from 'react';
import PropTypes from 'prop-types';

import { NavigationItem } from './NavigationItem.css';

const navigationItem = ({ link, title }) => {
  return (
    <li className={NavigationItem}>
      <a href={link}> {title} </a>
    </li>
  );
};

navigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default navigationItem;
