import {Text, TouchableOpacity, View} from 'react-native';
import styles from './JobsCard.styles';
import {useNavigation} from '@react-navigation/native';

const JobsCard = ({job, children}) => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate('Details', {job});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <Text style={styles.name} numberOfLines={2}>
        {job.name}
      </Text>
      <Text style={styles.type}>{job.type}</Text>
      <View style={styles.locationsWrapper}>
        <View style={styles.locations}>
          <Text style={styles.locationsText}>
            {job.locations.map(({name}) => name).join(', ')}
          </Text>
        </View>
      </View>
      <Text style={styles.levels}>
        {job.levels.map(({name}) => name).join(', ')}
      </Text>

      {children}
    </TouchableOpacity>
  );
};

export default JobsCard;
