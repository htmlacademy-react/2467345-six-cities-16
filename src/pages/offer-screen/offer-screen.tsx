import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import ReviewsForm from '../../components/offer-screen/reviews-form';
import OfferGallery from '../../components/offer-screen/offer-gallary';
import { AuthorizationStatus, persentOneStar } from '../../const';
import {capitalizeFLetter} from '../../utils/utils';
import OfferInside from '../../components/offer-screen/offer-inside';
import ReviewsList from '../../components/offer-screen/reviews-list';
import Map from '../../components/map';
import NearPlacesList from '../../components/offer-screen/near-places-list';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearestOffersAction } from '../../store/api-actions';

import { useEffect, useState } from 'react';
import Loader from '../../components/loader';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Review } from '../../types/review';
import { addComment } from '../../store/actions';

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if (id){
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearestOffersAction(id));
    }
  }, [dispatch, id]);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offer = useAppSelector((state) => state.currentOffer);
  const city = useAppSelector((state) => state.city);
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  const [comments, setComments] = useState<Review[]>([]);
  const currentComments = useAppSelector((state) => state.comments);
  useEffect(() => {
    setComments(currentComments);
  }, [currentComments]);

  const nearestOffers = useAppSelector((state) => state.nearestOffers).slice(0,3);
  const [selectedOffer] = useAppSelector((state) => state.offers).filter((o) => o.id === id);
  const offersForMap = [... nearestOffers, selectedOffer];

  const newComment = useAppSelector((state) => state.newComment);
  if (newComment){
    if(id){
      dispatch(fetchCommentsAction(id));
    }
    dispatch(addComment(null));
  }

  if(isOffersLoading){
    return <Loader/>;
  }

  if (offer) {
    const {
      title,
      type,
      price,
      isFavorite,
      isPremium,
      rating,
      description,
      goods,
      host,
      maxAdults,
      bedrooms,
      images
    } = offer;
    return(
      <div className="page">
        <Header/>
        { isOffersLoading ?
          <Loader/>
          :
          <main className="page__main page__main--offer">
            <section className="offer">
              <OfferGallery images={images}/>
              <div className="offer__container container">
                <div className="offer__wrapper">

                  {isPremium ?
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div> : null}

                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">
                      {title}
                    </h1>
                    <button className={`offer__bookmark-button${isFavorite ? '--active' : ''} button`} type="button">
                      <svg className="offer__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="offer__rating rating">
                    <div className="offer__stars rating__stars">
                      <span style={{ width:`${ Math.round(rating) * persentOneStar}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {capitalizeFLetter(type)}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
                      {bedrooms}
                      {bedrooms === 1 ? ' Bedroom' : ' Bedrooms'}
                    </li>
                    <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? ' Adult' : ' Adults'}
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">&euro;{price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <OfferInside goods={goods}/>
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      <div className={`offer__avatar-wrapper offer__avatar-wrapper${host.isPro ? '--pro' : ''} user__avatar-wrapper`}>
                        <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="offer__user-name">
                        {host.name}
                      </span>
                      {host.isPro ?
                        <span className="offer__user-status">
                      Pro
                        </span> : null }
                    </div>
                    <div className="offer__description">
                      <p className="offer__text">
                        {description}
                      </p>
                    </div>
                  </div>
                  <section className="offer__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                    <ReviewsList reviews={comments}/>
                    {isAuth === AuthorizationStatus.Auth ? <ReviewsForm/> : null}
                  </section>
                </div>
              </div>
              <section className="offer__map map">
                <Map city={city} offers={offersForMap} selectedOffer={selectedOffer}/>
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <NearPlacesList offers={nearestOffers}/>
              </section>
            </div>
          </main>}

      </div>
    );
  }
  return <NotFoundScreen />;
}
export default OfferScreen;
