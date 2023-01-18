import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  meal: {
    paddingHorizontal: 10,
    paddingTop: 20,
    color: '#a5292a',
    fontSize: 24,
  },
  area: {
    paddingHorizontal: 10,
    color: '#a5292a',
  },
  instructions: {
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    text: {
      color: '#FFF',
    },
  },
});
