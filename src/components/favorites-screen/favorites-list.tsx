import { Offer } from '../../types/offer';
import OffersListByCity from './offers-list-by-city';

type FavoritesListProps = {
  offers: Offer[];
}
function FavoritesList({offers}: FavoritesListProps): JSX.Element{

  function groupBy(arr : Offer[], property: string, innerProperty?: string){
    return arr.reduce((memo: Offer[][], x: Offer) => {
      if (!memo[x[property][innerProperty]]) {
        memo[x[property][innerProperty]] = [];
      }
      memo[x[property][innerProperty]].push(x);
      return memo;
    }, {});
  }

  const groupsFavorites = groupBy(offers, 'city', 'name');
  return(
    <ul className="favorites__list">
      {Object.keys(groupsFavorites).map((key) => (<OffersListByCity key={key} offers={groupsFavorites[key]}/>))}
    </ul>
  );
}
export default FavoritesList;
