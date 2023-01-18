import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailCard.styles';

const pressHandler = url => {
  Linking.openURL(url);
};

const DetailCard = ({detail}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: detail.strMealThumb}} style={styles.image} />
      <Text style={styles.meal}>{detail.strMeal}</Text>
      <Text style={styles.area}>{detail.strArea}</Text>
      <Text style={styles.instructions}>{detail.strInstructions}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => pressHandler(detail.strYoutube)}>
        <Text style={styles.button.text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
