import {ActivityIndicator, FlatList, View} from 'react-native';
import {AddModal, RoomCard} from '../../components';
import {useFetchRooms} from '../../hooks';
import styles from './Room.styles';
import firestore from '@react-native-firebase/firestore';

const Room = ({navigation}) => {
  const {loading, data} = useFetchRooms();

  const onPressHandler = id => {
    navigation.navigate('RoomDetail', {id});
  };

  const addRoomHandler = text => {
    firestore()
      .collection('rooms')
      .add({name: text, createdAt: new Date()})
      .catch(err => console.log(err));
  };

  if (loading) {
    return <ActivityIndicator style={{flex: 1}} size={'large'} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RoomCard
            name={item.name}
            onPressHandler={() => onPressHandler(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />

      <AddModal
        placeholder={'Add Room'}
        buttonText={'Add'}
        submitHandler={addRoomHandler}
      />
    </View>
  );
};

export default Room;
