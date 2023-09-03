import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../../screens';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  headerTitleAlign: 'center',
  cardStyle: {backgroundColor: '#ff6f00'},
};

const AuthNavigator = () => {
  StatusBar.setBarStyle('light-content', true);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
