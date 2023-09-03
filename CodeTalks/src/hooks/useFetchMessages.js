import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const useFetchMessages = id => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('rooms')
      .doc(id)
      .onSnapshot(onResult);

    return () => subscriber();
  }, [id]);

  const onResult = QuerySnapshot => {
    setData(QuerySnapshot.data().messages);
    setLoading(false);
  };

  return {loading, data};
};

export default useFetchMessages;
