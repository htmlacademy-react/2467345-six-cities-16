import { Offer } from '../../types/offer';
import Header from '../../components/header';
import Map from '../../components/map';
import { useState } from 'react';
import CitiesPlaceList from '../../components/main-screen/cities-place-list';
import { store } from '../../store';
import CitiesList from '../../components/main-screen/cities-list';
import { changeCity } from '../../store/actions';
import { City } from '../../types/city';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const navigate = useNavigate();

  const selectedCity = store.getState().city;
  const offersInCity = offers.filter((offer) => offer.city.name === selectedCity.name);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedOffer(currentPoint);
  };

  const handleCitiesListOnClick = (city: City) => {
    store.dispatch(changeCity(city));
    navigate(AppRoute.Main);
  };

  return (
    <body>
      <div className="page page--gray page--main">
        <Header/>

        <main className="page__main `page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList onCityClick={handleCitiesListOnClick}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersInCity.length} places to stay in {selectedCity.name}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <CitiesPlaceList offers={offersInCity} onListItemHover={handleListItemHover}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={selectedCity} offers={offersInCity} selectedOffer={selectedOffer}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default MainScreen;
