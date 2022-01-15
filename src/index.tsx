import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { mirageServer } from './services/mirage';

mirageServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
