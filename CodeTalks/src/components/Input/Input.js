import {TextInput, View} from 'react-native';
import styles from './Input.styles';

const Input = ({
  label,
  onChangeText,
  placeholderTextColor = '#FFF',
  inputStyle,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{...styles.input, ...inputStyle}}
        placeholder={label}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;
