import {Dimensions, ScrollView, Text, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './JobDetailCard.styles';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {toggleFavorite} from '../../store/slices/favoriteSlice';

const JobDetailCard = ({job}) => {
  const {width} = Dimensions.get('window');
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite({job}));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.name}</Text>
      <Text style={styles.subtitle}>
        Locations:
        <Text style={styles.textBlack}>
          {job.locations.map(({name}) => name).join(', ')}
        </Text>
      </Text>
      <Text style={styles.subtitle}>
        Job Level:
        <Text style={styles.textBlack}>
          {job.levels.map(({name}) => name).join(', ')}
        </Text>
      </Text>

      <Text style={styles.jobDetail}>Job Detail</Text>

      <RenderHtml
        baseStyle={styles.content}
        contentWidth={width}
        source={{html: job.contents}}
      />

      <View style={styles.actions}>
        <Button title="Submit" icon={'check'} buttonStyle={{margin: 5}} />
        <Button
          title="Favorite Job"
          icon={'heart'}
          buttonStyle={{margin: 5}}
          onSubmit={handleFavorite}
        />
      </View>
    </ScrollView>
  );
};

export default JobDetailCard;
