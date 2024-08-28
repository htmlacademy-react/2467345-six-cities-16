import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { OfferFull } from '../types/offer-full';
import { Review } from '../types/review';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS: 'GET_OFFERS',
  GET_USER_DATA: 'GET_USER_DATA',
  GET_CURRENT_OFFER: 'GET_CURRENT_OFFER',
  GET_COMMENTS: 'GET_COMMENTS',
  GET_NEAREST_OFFERS: 'GET_NEAREST_OFFERS',
  ADD_COMMENT: 'ADD_COMMENT',
  CHANGE_SORT: 'CHANGE_SORT',
  REQUIRE_AUTH: 'REQUIRE_AUTH',
  SWITCH_DATA_LOADING_STATUS: 'SWITCH_DATA_LOADING_STATUS',
  SET_ERROR: 'SET_ERROR',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({ payload: selectedCity}));

export const getOffers = createAction<Offer[]>(Action.GET_OFFERS);

export const getCurrentOffer = createAction<OfferFull>(Action.GET_CURRENT_OFFER);

export const getComments = createAction<Review[]>(Action.GET_COMMENTS);

export const getNearestOffers = createAction<Offer[]>(Action.GET_NEAREST_OFFERS);

export const addComment = createAction<Review | null>(Action.ADD_COMMENT);

export const changeSortType = createAction(Action.CHANGE_SORT, (sortType: string) => ({payload: sortType}));

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTH);

export const switchDataLoadingStatus = createAction<boolean>(Action.SWITCH_DATA_LOADING_STATUS);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const getUserData = createAction<UserData>(Action.GET_USER_DATA);
