import React from 'react';
import PropTypes from 'prop-types';

import { InputArea, InputLabel, InputElement, NotValid } from './Input.css';

const order = ({ type, label, isValid, options = [], ...elementProps }) => {
  let className = [InputElement, isValid ? null : NotValid].join(' ');

  let inputElement = null;
  switch (type) {
    case 'input':
      inputElement = <input {...elementProps} className={className} />;
      break;
    case 'textarea':
      inputElement = <textarea {...elementProps} className={className} />;
      break;
    case 'select':
      inputElement = (
        <select {...elementProps} className={className}>
          {options.map(option => (
            <option key={option.name} value={option.name}>
              {option.displayName}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input {...elementProps} className={className} />;
  }
  return (
    <div className={InputArea}>
      <span className={InputLabel}> {label} </span>
      {inputElement}
    </div>
  );
};

order.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  elementProps: PropTypes.object,
  options: PropTypes.array,
  isValid: PropTypes.bool
};

export default order;
