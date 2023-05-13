import {JobsCard} from '../index';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {toggleFavorite} from '../../store/slices/favoriteSlice';

const RemoveButton = ({favorite}) => {
  const dispatch = useDispatch();
  const removeFavorite = () => dispatch(toggleFavorite({job: favorite}));

  return <Button title={'Remove'} onSubmit={removeFavorite} />;
};

const FavoriteCard = ({favorite}) => {
  return (
    <JobsCard job={favorite} children={<RemoveButton favorite={favorite} />} />
  );
};

export default FavoriteCard;
