import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  modalWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  inputStyle: {
    backgroundColor: '#FFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    color: '#000',
  },
});
