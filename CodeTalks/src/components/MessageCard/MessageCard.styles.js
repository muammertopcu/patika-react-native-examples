import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 12,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  message: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
