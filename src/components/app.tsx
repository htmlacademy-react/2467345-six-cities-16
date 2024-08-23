import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen
  from '../pages/login-screen/login-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from './priavate-route/private-route';
import { Review } from '../types/review';
import { useAppSelector } from '../hooks';

type AppProps = {
  reviews: Review[];
}
function App({reviews}: AppProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return(
    <BrowserRouter>
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
        <Route path={AppRoute.Offer} element={<OfferScreen offers={[]} reviews={reviews}/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
