import {Modal, TouchableOpacity, View} from 'react-native';
import Input from '../Input';
import Button from '../Button';
import {Fragment, useState} from 'react';
import styles from './AddModal.styles';

const AddModal = ({placeholder, buttonText, submitHandler}) => {
  const [roomName, setRoomName] = useState('');
  const [modalShown, setModalShown] = useState(false);

  const buttonHandler = () => {
    submitHandler(roomName);
    setModalShown(false);
  };

  return (
    <Fragment>
      <View style={styles.icon}>
        <Button
          theme={'icon'}
          title={'+'}
          onPress={() => setModalShown(true)}
        />
      </View>

      <Modal transparent={true} visible={modalShown} animationType={'fade'}>
        <TouchableOpacity
          onPress={() => setModalShown(false)}
          activeOpacity={1}
          style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
            <Input
              label={placeholder}
              inputStyle={styles.inputStyle}
              placeholderTextColor={'#ccc'}
              multiline={true}
              onChangeText={text => setRoomName(text)}
            />

            <Button title={buttonText} onPress={buttonHandler} />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </Fragment>
  );
};

export default AddModal;
