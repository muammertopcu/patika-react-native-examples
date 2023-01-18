import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#00000066',
    bottom: 0,
    color: '#FFF',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
});
