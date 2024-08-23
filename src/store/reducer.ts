import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, SortTypes } from '../const';
import { changeCity, changeSortType, getOffers, requireAuthorization, switchDataLoadingStatus } from './actions';
import sort from '../utils/sort';
import { City } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  city: Cities.AMSTERDAM,
  offers: [],
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
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
      state.offers = sort[action.payload]([]);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(switchDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export { reducer };
