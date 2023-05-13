import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from '../pages';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const homeOptions = {
    title: 'Jobs',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ef5350',
    },
  };

  const detailsOptions = {
    headerTintColor: '#ef5350',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} options={homeOptions} />
      <Stack.Screen name={'Details'} component={Details} options={detailsOptions}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
