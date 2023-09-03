import {AuthNavigator} from './AuthNavigator';
import auth from '@react-native-firebase/auth';
import {MainNavigator} from './MainNavigator';
import {useEffect, useState} from 'react';

const Navigator = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return () => subscriber();
  }, []);

  if (user) {
    return <MainNavigator />;
  }

  return <AuthNavigator />;
};

export default Navigator;
