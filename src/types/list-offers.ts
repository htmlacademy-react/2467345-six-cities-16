import { City } from './city';
import { Location } from './location';

export type OfferItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
}

export type OffersList = OfferItem[];

