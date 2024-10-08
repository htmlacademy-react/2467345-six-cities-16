import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import ReviewsForm from '../../components/offer-screen/reviews-form';
import { Review } from '../../types/review';
import OfferGallery from '../../components/offer-screen/offer-gallary';
import { Cities, persentOneStar } from '../../const';
import {capitalizeFLetter} from '../../utils/utils';
import OfferInside from '../../components/offer-screen/offer-inside';
import ReviewsList from '../../components/offer-screen/reviews-list';
import Map from '../../components/map';
import NearPlacesList from '../../components/offer-screen/near-places-list';
import { OfferFull } from '../../types/offer-full';

type OfferScreenProps = {
  offers: OfferFull[];
  reviews: Review[];
}

function OfferScreen({offers, reviews}: OfferScreenProps): JSX.Element {
  const params = useParams();
  const [offer] = offers.filter((o)=>(o.id === params.id));
  return(
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">

              {offer.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : null}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={`offer__bookmark-button${offer.isFavorite ? '--active' : ''} button`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width:`${ Math.round(offer.rating) * persentOneStar}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFLetter(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms}
                  {offer.bedrooms === 1 ? ' Bedroom' : ' Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} {offer.maxAdults === 1 ? ' Adult' : ' Adults'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside goods={offer.goods}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper offer__avatar-wrapper${offer.host.isPro ? '--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro ?
                    <span className="offer__user-status">
                      Pro
                    </span> : null }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={Cities.AMSTERDAM} offers={[]} selectedOffer={undefined}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList offers={[]}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
