import {Text, View} from 'react-native';
import styles from './MessageCard.styles';
import moment from 'moment';

const MessageCard = ({message}) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageInfo}>
        <Text style={styles.user}>{message.user}</Text>
        <Text style={styles.date}>{moment(message.createdAt).fromNow()}</Text>
      </View>
      <Text style={styles.message}>{message.message}</Text>
    </View>
  );
};

export default MessageCard;
