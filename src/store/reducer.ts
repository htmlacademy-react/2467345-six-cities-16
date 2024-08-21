import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { changeCity, getOffers } from './actions';
import { offers } from '../mocks/offers';

const initialState = {
  city: Cities.AMSTERDAM,
  offers: offers,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });

});
