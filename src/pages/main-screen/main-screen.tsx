import { Offer } from '../../types/offer';
import Header from '../../components/header';
import Map from '../../components/map';
import { useState } from 'react';
import CitiesPlaceList from '../../components/main-screen/cities-place-list';
import CitiesList from '../../components/main-screen/cities-list';
import { changeCity } from '../../store/actions';
import { City } from '../../types/city';
import { useNavigate } from 'react-router-dom';
import { AppRoute} from '../../const';
import PlacesSort from '../../components/main-screen/places-sort';
import MainEmpty from '../../components/main-screen/main-empty';
import { useAppDispatch, useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.city);
  const offersInCity = useAppSelector((state) => state.offers)
    .filter((offer) => offer.city.name === selectedCity.name);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = offersInCity.find((offer) => offer.id === listItemId);
    setSelectedOffer(currentPoint);
  };

  const handleCitiesListOnClick = (city: City) => {
    dispatch(changeCity(city));
    navigate(AppRoute.Main);
  };

  return (
    <body>
      <div className="page page--gray page--main">
        <Header/>

        <main className="page__main page__main--index ">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList onCityClick={handleCitiesListOnClick}/>
            </section>
          </div>
          <div className="cities">
            {offersInCity.length === 0 ? <MainEmpty/> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersInCity.length} places to stay in {selectedCity.name}</b>
                  <PlacesSort/>
                  <CitiesPlaceList offers={offersInCity} onListItemHover={handleListItemHover}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map city={selectedCity} offers={offersInCity} selectedOffer={selectedOffer}/>
                  </section>
                </div>
              </div>}
          </div>
        </main>
      </div>
    </body>
  );
}

export default MainScreen;
