import { PlacesListProps } from '../../types/places-list-props';
import PlaceCard from './place-card';

type typeProps = PlacesListProps & {
 className: string;
}

function PlacesList ({offers, onListItemHover, className}: typeProps): JSX.Element {
  return (
    <div className={`${className} places__list tabs__content`}>
      {offers.map((offer)=>(<PlaceCard key={offer.id} offer = {offer} onMouseOver = {onListItemHover}/>))}
    </div>
  );
}
export default PlacesList;
