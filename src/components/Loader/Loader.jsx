import { ThreeDots } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="rgb(63, 81, 181)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      visible={true}
    />
  );
};

export default Loader;
