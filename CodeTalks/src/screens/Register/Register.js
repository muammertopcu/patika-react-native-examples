import {SafeAreaView, Text, View} from 'react-native';
import {Button, Input} from '../../components';
import styles from './Register.styles';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {authError} from '../../utils';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const registerHandler = () => {
    if (!email || !password || !rePassword) {
      Toast.show({type: 'error', text1: 'Please fill in all fields!'});
      return;
    }

    if (password !== rePassword) {
      Toast.show({type: 'error', text1: 'Passwords do not match!'});
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error =>
        Toast.show({type: 'error', text1: authError(error.code)}),
      );
  };

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>CodeTalks</Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
        />

        <Input
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />

        <Input
          placeholder="Re-enter Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={value => setRePassword(value)}
        />

        <Button title="Register" onPress={registerHandler} />
        <Button title="Back" theme={'light'} onPress={backHandler} />
      </View>
    </SafeAreaView>
  );
};

export default Register;
