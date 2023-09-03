import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const useFetchRooms = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('rooms')
      .orderBy('createdAt', 'desc')
      .onSnapshot(onResult);

    return () => subscriber();
  }, []);

  const onResult = QuerySnapshot => {
    setData([]);
    QuerySnapshot.forEach(documentSnapshot => {
      setData(prevState => [
        ...prevState,
        {...documentSnapshot.data(), id: documentSnapshot.id},
      ]);
    });

    setLoading(false);
  };

  return {loading, data};
};

export default useFetchRooms;
