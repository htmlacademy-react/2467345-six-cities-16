import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const countPlaces = 333;

root.render(
  <React.StrictMode>
    <App countPlaces = {countPlaces}/>
  </React.StrictMode>
);
