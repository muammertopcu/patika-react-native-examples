import {FlatList} from 'react-native';
import {useAxios} from '../../hooks';
import Config from 'react-native-config';
import {Error, Loading, MealCard} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Meals = ({route: {params}}) => {
  const navigation = useNavigation();

  const {data, error, loading} = useAxios(
    `${Config.API_URL}/filter.php?c=${params.category}`,
  );

  const pressHandler = meal => {
    navigation.navigate('Detail', {meal});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      keyExtractor={item => item.idMeal}
      data={data.meals}
      renderItem={({item}) => (
        <MealCard data={item} onPress={() => pressHandler(item.idMeal)} />
      )}
    />
  );
};

export default Meals;
