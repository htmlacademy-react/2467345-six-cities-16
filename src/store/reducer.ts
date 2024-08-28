import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, SortTypes } from '../const';
import { addComment, changeCity, changeSortType, getComments, getCurrentOffer, getNearestOffers, getOffers, getUserData, requireAuthorization, setError, switchDataLoadingStatus } from './actions';
import sort from '../utils/sort';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { OfferFull } from '../types/offer-full';
import { Review } from '../types/review';

type InitialState = {
  city: City;
  offers: Offer[];
  currentOffer: OfferFull | null;
  comments: Review[];
  newComment: Review | null;
  nearestOffers: Offer[];
  user: UserData | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: Cities.AMSTERDAM,
  offers: [],
  currentOffer: null,
  comments: [],
  newComment: null,
  nearestOffers: [],
  user: null,
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.newComment = action.payload;
    })
    .addCase(getNearestOffers, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.user = action.payload;
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
