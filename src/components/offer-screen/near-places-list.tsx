import { PlacesListProps } from '../../types/places-list-props';
import PlacesList from '../main-screen/places-list';

function NearPlacesList(props: PlacesListProps): JSX.Element{

  return(
    <PlacesList
      className='near-places__list'
      {...props}
    />
  );
}
export default NearPlacesList;
