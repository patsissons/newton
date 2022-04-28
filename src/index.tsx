import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'foundation/App';

import './styles';

const containerId = 'root';
const container = document.getElementById(containerId);

if (!container) {
  throw new Error(`React mounting container missing: #${containerId}`);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container,
);
