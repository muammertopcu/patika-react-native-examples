import AnimatedLottieView from 'lottie-react-native';

const Error = () => (
  <AnimatedLottieView
    source={require('../../assets/error.json')}
    autoPlay
    loop
  />
);

export default Error;
