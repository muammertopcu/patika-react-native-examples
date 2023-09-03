import {createStackNavigator} from '@react-navigation/stack';
import {Room, RoomDetail} from '../../screens';

const Stack = createStackNavigator();

const screenOptions = {
  cardStyle: {backgroundColor: '#fff'},
  headerTintColor: '#ff6f00',
  headerTitleAlign: 'center',
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={'Rooms'} component={Room} />
      <Stack.Screen
        name={'RoomDetail'}
        component={RoomDetail}
        options={{
          title: 'Room Detail',
          cardStyle: {backgroundColor: '#ff6f00'},
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
