/* global document */
import React from 'react';
import { render } from 'react-dom';
import '../css/main.css';
import App from './App/App';

require('es6-object-assign').polyfill();

function renderApp() {
  render(<App />, document.getElementById('app'));
}
renderApp();

if (module.hot) {
  module.hot.accept('./App/App', () => {
    renderApp();
  });
}
