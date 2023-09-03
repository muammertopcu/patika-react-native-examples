import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

const Button = ({title, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].container}>
      <Text style={styles[theme].text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
