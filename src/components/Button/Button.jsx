import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  title, modifier, onClick, isDisabled
}) => {
  const classNames = `button ${modifier}`;
  return (
    <button
      type="button"
      title={title}
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Button;
