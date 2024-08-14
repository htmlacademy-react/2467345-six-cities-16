import { Offer } from '../../types/offer';
import OffersListByCity from './offers-list-by-city';

type FavoritesListProps = {
  offers: Offer[];
}

type GroupsFavorites = {
  [key: string]: Offer[];
}
function FavoritesList({offers}: FavoritesListProps): JSX.Element{

  function groupByCity(arr : Offer[]){
    return arr.reduce((memo: GroupsFavorites, x: Offer) => {
      if (!memo[x.city.name]) {
        memo[x.city.name] = [];
      }
      memo[x.city.name].push(x);
      return memo;
    }, {});
  }

  const groupsFavorites = groupByCity(offers);

  return(
    <ul className="favorites__list">
      {Object.keys(groupsFavorites).map((key: keyof GroupsFavorites) => (<OffersListByCity key={key} offers={groupsFavorites[key]}/>))}
    </ul>
  );
}
export default FavoritesList;
