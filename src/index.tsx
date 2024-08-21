import React from 'react';
import ReactDOM from 'react-dom/client';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
