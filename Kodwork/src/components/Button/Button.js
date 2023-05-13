import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({
  title,
  icon,
  iconSize = 16,
  buttonStyle,
  titleStyle,
  onSubmit,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...buttonStyle}}
      onPress={e => onSubmit(e)}>
      <Text style={{...styles.title, ...titleStyle}}>
        {icon && (
          <Icon name={icon} size={iconSize} color="#fff" style={styles.icon} />
        )}
        {title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
