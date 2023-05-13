import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import 'react-native-gesture-handler';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
