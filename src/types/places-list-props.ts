import { Offer } from './offer';

export type PlacesListProps = {
  offers: Offer[];
  onListItemHover?: (listItemId: string) => void;
 };
