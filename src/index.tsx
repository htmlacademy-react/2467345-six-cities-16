import React from 'react';
import ReactDOM from 'react-dom/client';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const countPlaces = offers.length;

root.render(
  <React.StrictMode>
    <App countPlaces = {countPlaces} offers = {offers} reviews = {reviews}/>
  </React.StrictMode>
);
