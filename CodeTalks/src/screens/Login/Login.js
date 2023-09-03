import {SafeAreaView, Text, View} from 'react-native';
import {Button, Input} from '../../components';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import styles from './Login.styles';
import Toast from 'react-native-toast-message';
import {authError} from '../../utils';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        Toast.show({type: 'error', text1: authError(error.code)});
      });
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <Button title="Login" onPress={handleLogin} />
        <Button title="Register" theme={'light'} onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
