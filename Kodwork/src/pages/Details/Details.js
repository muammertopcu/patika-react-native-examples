import {JobDetailCard} from '../../components';

const Details = ({route}) => {
  const {job} = route.params;

  return <JobDetailCard job={job} />;
};

export default Details;
