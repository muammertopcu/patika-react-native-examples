import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
