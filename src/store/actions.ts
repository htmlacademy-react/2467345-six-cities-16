import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  GET_OFFERS: 'GET_OFFERS'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({ payload: selectedCity}));

export const getOffers = createAction(Action.GET_OFFERS, (currentOffers: Offer[]) => ({
  payload: currentOffers
}));
