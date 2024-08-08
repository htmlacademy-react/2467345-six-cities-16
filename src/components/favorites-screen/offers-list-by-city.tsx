import { Offer } from '../../types/offer';
import PlaceCardFavorite from './place-card-favorite';

type OffersListByCityProps = {
  offers: Offer[];
}

function OffersListByCity({offers}: OffersListByCityProps): JSX.Element{
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offers[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer)=>(<PlaceCardFavorite key={offer.id} offer = {offer}/>))}
      </div>
    </li>
  );
}

export default OffersListByCity;
