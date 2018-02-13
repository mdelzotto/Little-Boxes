import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Box from './components/Box';

let wrapperParagraph = 'Lorem ipsum dolor sit amet...'

ReactDOM.render(
  <div>
    <Box
      boxClass='wrapper'
      header='I Am the Wrapper'
      paragraph={wrapperParagraph}
    />
    
  </div>,
  document.getElementById('app')
);
