import {ActivityIndicator, View} from 'react-native';
import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ef5350" />
    </View>
  );
};

export default Loading;
