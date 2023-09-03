import {Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.styles';

const RoomCard = ({name, onPressHandler}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
