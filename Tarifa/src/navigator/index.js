import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Categories, Detail, Meals} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFA500',
        headerTitleStyle: {color: '#FFA500'},
        contentStyle: {backgroundColor: '#FFA500'},
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          contentStyle: {backgroundColor: '#CCC'},
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
