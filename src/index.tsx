import React from 'react';
import ReactDOM from 'react-dom/client';
import { reviews } from './mocks/reviews';

import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
