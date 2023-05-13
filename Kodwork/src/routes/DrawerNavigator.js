import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {Favorites} from '../pages';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#e91e63',
      }}>
      <Drawer.Screen name={'Jobs'} component={StackNavigator} />
      <Drawer.Screen name={'Favorites'} component={Favorites} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
