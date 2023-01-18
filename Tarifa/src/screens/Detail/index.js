import {FlatList} from 'react-native';
import {useAxios} from '../../hooks';
import Config from 'react-native-config';
import {Error, Loading} from '../../components';
import DetailCard from '../../components/DetailCard';

const Detail = ({route: {params}}) => {
  const {data, error, loading} = useAxios(
    `${Config.API_URL}/lookup.php?i=${params.meal}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data.meals}
      renderItem={({item}) => <DetailCard detail={item} />}
    />
  );
};

export default Detail;
