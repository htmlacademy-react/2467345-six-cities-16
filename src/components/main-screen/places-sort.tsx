import { useState } from 'react';
import { AppRoute, SortTypes } from '../../const';
import { useNavigate } from 'react-router-dom';
import { store } from '../../store';
import { changeSortType } from '../../store/actions';

function PlacesSort(): JSX.Element{
  const navigate = useNavigate();
  const selectedSortType = store.getState().sortType;

  const [isOpen, setIsOpen] = useState(false);

  const hanldeSortListClick = () => {
    setIsOpen(!isOpen);
  };
  const hanldeSortItemClick = (sortType: string) => {
    store.dispatch(changeSortType(sortType));
    setIsOpen(!isOpen);
    navigate(AppRoute.Main);
  };

  return(
    <form className="places__sorting" action="#" method="get" onClick={() => hanldeSortListClick()}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${isOpen ? '--opened' : ''}`}>
        {Object.values(SortTypes).map((sortType: string) => (
          <li className={`places__option ${selectedSortType === sortType ? 'places__option--active' : ''}`} tabIndex={0} key={sortType} onClick={() => hanldeSortItemClick(sortType)}>
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}
export default PlacesSort;
