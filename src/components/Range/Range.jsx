import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import './Range.css';
import './Input-Range.css';

const Range = ({ defaultTimer, timerState, setTime }) => (
  <div className="range">
    <div className="range__inner">
      <InputRange
        minValue={0}
        maxValue={60}
        value={defaultTimer}
        onChange={value => setTime(value)}
        disabled={timerState !== 'stop'}
      />
    </div>
  </div>
);

Range.propTypes = {
  defaultTimer: PropTypes.number.isRequired,
  timerState: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired
};

export default Range;
