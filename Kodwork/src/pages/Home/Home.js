import {FlatList} from 'react-native';
import {JobsCard, Loading} from '../../components';
import useFetch from '../../hooks/useFetch';
import {useEffect, useState} from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: {results, page, total},
    loading,
  } = useFetch('/public/jobs?page=' + currentPage);

  useEffect(() => {
    results && setJobs(prevState => [...prevState, ...results]);
  }, [results]);

  const handleLoadMore = () => {
    if (page === total) {
      return;
    }

    setCurrentPage(page + 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={jobs}
      renderItem={({item}) => <JobsCard job={item} />}
      keyExtractor={item => item.id}
      onEndReached={() => handleLoadMore()}
    />
  );
};

export default Home;
