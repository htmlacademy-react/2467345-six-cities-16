import { useState } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from './place-card';

type OffersListProps = {
 offers: Offer[];
}

function OffersList ({offers}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState({id: ''});
  const handleMouseOver = (id: string) => {
    setActiveCard(
      {
        ...activeCard,
        id: id,
      }
    );
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=>(<PlaceCard key={offer.id} offer = {offer} onMouseOver = {handleMouseOver}/>))}
    </div>
  );
}
export default OffersList;
