import React from 'react';
import logoSrc from '../../img/logo.svg';
import './Logo.css';

const Logo = () => (
  <div className="logo">
    <div className="logo__cell logo__cell_left">
      <img src={logoSrc} alt="Pomodoro Timer" className="logo__img" />
    </div>
    <div className="logo__cell">
      <span>Pomodoro Timer</span>
    </div>
  </div>
);

export default Logo;
