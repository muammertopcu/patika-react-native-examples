import {useSelector} from 'react-redux';
import {FlatList, SafeAreaView} from 'react-native';
import {FavoriteCard} from '../../components';

const Favorites = () => {
  const {favorites} = useSelector(state => state.favoriteSlice);

  return (
    <SafeAreaView>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FavoriteCard key={item.id} favorite={item} />}
      />
    </SafeAreaView>
  );
};

export default Favorites;
