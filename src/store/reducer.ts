import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, SortTypes } from '../const';
import { changeCity, changeSortType, getOffers, requireAuthorization } from './actions';
import { offers } from '../mocks/offers';
import sort from '../utils/sort';

const initialState = {
  city: Cities.AMSTERDAM,
  offers: offers,
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
