import { SortTypes } from '../const';
import { OfferItem } from '../types/list-offers';

const sort = {
  [SortTypes.POPULAR]: (offers: OfferItem[]) => offers,
  [SortTypes.PRICE_LOW_TO_HIGH]: (offers: OfferItem[]) => offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (offers: OfferItem[]) => offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [SortTypes.TOP_RATED_FIRST]: (offers: OfferItem[]) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating),
};

export default sort;
