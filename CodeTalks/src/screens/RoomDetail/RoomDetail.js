import {ActivityIndicator, FlatList, View} from 'react-native';
import useFetchMessages from '../../hooks/useFetchMessages';
import {AddModal, MessageCard} from '../../components';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const RoomDetail = ({route}) => {
  const {loading, data} = useFetchMessages(route.params.id);

  const addMessageHandler = message => {
    firestore()
      .collection('rooms')
      .doc(route.params.id)
      .update({
        messages: firestore.FieldValue.arrayUnion({
          message,
          user: auth().currentUser.email,
          createdAt: new Date().toISOString(),
        }),
      })
      .catch(error => console.log(error));
  };

  if (loading) {
    return <ActivityIndicator style={{flex: 1}} size={'large'} />;
  }

  return (
    <View style={{flex: 1, paddingTop: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => <MessageCard message={item} />}
      />

      <AddModal
        placeholder={'Your Message'}
        buttonText={'Send'}
        submitHandler={addMessageHandler}
      />
    </View>
  );
};

export default RoomDetail;
