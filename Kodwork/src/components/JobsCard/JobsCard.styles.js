import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  type: {
    fontSize: 16,
    color: '#000',
  },
  locationsWrapper: {
    alignItems: 'baseline',
    marginVertical: 5,
  },
  locations: {
    backgroundColor: '#ef5350',
    borderRadius: 50,
    padding: 5,
  },
  locationsText: {
    color: '#fff',
    fontSize: 12,
  },
  levels: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#ef5350',
  },
});
