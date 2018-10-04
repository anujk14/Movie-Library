import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Welcome to my movie library';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
