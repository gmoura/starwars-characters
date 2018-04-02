'use strict'

const css = require('../stylus/main.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
import swapi from './swapi';
import sw from './registerServiceWorker';

ReactDOM.render(
  <Index />,
  document.getElementById('main-wrap')
);