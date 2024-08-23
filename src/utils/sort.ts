import { SortTypes } from '../const';
import { Offer } from '../types/offer';

const sort = {
  [SortTypes.POPULAR]: (offers: Offer[]) => offers,
  [SortTypes.PRICE_LOW_TO_HIGH]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [SortTypes.TOP_RATED_FIRST]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating),
};

export default sort;
