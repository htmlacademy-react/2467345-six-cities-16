import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS: 'GET_OFFERS',
  CHANGE_SORT: 'CHANGE_SORT',
  REQUIRE_AUTH: 'REQUIRE_AUTH',
  SWITCH_DATA_LOADING_STATUS: 'SWITCH_DATA_LOADING_STATUS',
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({ payload: selectedCity}));

export const getOffers = createAction<Offer[]>(Action.GET_OFFERS);

export const changeSortType = createAction(Action.CHANGE_SORT, (sortType: string) => ({payload: sortType}));

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTH);

export const switchDataLoadingStatus = createAction<boolean>(Action.SWITCH_DATA_LOADING_STATUS);
