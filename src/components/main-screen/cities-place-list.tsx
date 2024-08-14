import { PlacesListProps } from '../../types/places-list-props';
import PlacesList from './places-list';

function CitiesPlaceList(props: PlacesListProps): JSX.Element{

  return(
    <PlacesList
      className='cities__places-list'
      {...props}
    />
  );
}
export default CitiesPlaceList;
