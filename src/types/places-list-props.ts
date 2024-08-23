import { OfferItem } from './list-offers';

export type PlacesListProps = {
  offers: OfferItem;
  onListItemHover?: (listItemId: string) => void;
 };
