import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#544e4e',
    paddingHorizontal: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ef5350',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  textBlack: {
    color: '#000',
  },
  jobDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  content: {
    backgroundColor: '#fff',
    borderColor: '#CCC',
    borderWidth: 1,
    marginHorizontal: 2,
    paddingHorizontal: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
