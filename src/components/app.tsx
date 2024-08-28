import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen
  from '../pages/login-screen/login-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from './priavate-route/private-route';
import { useAppSelector } from '../hooks';
import browserHistory from '../browser-history';
import HistoryRouter from './history-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen offers={[]}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
