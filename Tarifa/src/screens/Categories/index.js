import {FlatList} from 'react-native';
import {useAxios} from '../../hooks';
import {CategoryCard, Error, Loading} from '../../components';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  const {data, error, loading} = useAxios(
    `${Config.API_URL}/categories.php`,
  );

  const pressHandler = category => {
    navigation.navigate('Meals', {category});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onClick={() => pressHandler(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      keyExtractor={({idCategory}) => idCategory}
      data={data?.categories}
      renderItem={renderCategory}
    />
  );
};

export default Categories;
