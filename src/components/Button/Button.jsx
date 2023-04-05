import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <>
      <ButtonLoad type="button" onClick={onLoadMore()}>
        Load more
      </ButtonLoad>
    </>
  );
};

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
