import {StyleSheet} from 'react-native';

const primaryColor = '#ffa040';
const lightColor = '#ffffff';

const styles = {
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
};

export default {
  primary: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: primaryColor,
    },
    text: {
      ...styles.text,
      color: lightColor,
    },
  }),
  light: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: lightColor,
    },
    text: {
      ...styles.text,
      color: primaryColor,
    },
  }),
  icon: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: primaryColor,
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    text: {
      ...styles.text,
      color: lightColor,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  }),
};
