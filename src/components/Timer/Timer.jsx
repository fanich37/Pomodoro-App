import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = ({ min, sec }) => (
  <div className="timer">
    <div className="timer__inner">
      <span className="timer__data">{min}</span>
      <span>:</span>
      <span className="timer__data">{sec}</span>
    </div>
  </div>
);

Timer.propTypes = {
  min: PropTypes.string.isRequired,
  sec: PropTypes.string.isRequired
};

export default Timer;
