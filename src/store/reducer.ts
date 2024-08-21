import { createReducer } from '@reduxjs/toolkit';
import { Cities, SortTypes } from '../const';
import { changeCity, changeSortType, getOffers } from './actions';
import { offers } from '../mocks/offers';
import sort from '../utils/sort';

const initialState = {
  city: Cities.AMSTERDAM,
  offers: offers,
  sortType: SortTypes.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      state.offers = sort[action.payload]([...offers]);
    });

});

export { reducer };
