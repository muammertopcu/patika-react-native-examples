import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './CategoryCard.styles';
const CategoryCard = ({category, onClick}) => {
  const {strCategoryThumb, strCategory} = category;

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image
        source={{uri: strCategoryThumb}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <Text style={styles.name}>{strCategory}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
