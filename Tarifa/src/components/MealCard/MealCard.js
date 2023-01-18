import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({data, onPress}) => {
  const {strMealThumb, strMeal} = data;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        resizeMode={'cover'}
        source={{uri: strMealThumb}}
        style={styles.image}
      />

      <Text style={styles.name} numberOfLines={1}>
        {strMeal}
      </Text>
    </TouchableOpacity>
  );
};

export default MealCard;
