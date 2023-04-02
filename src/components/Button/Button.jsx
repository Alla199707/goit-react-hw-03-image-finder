import { ButtonLoad } from './Button.styled';

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <>
      <ButtonLoad type="button" onClick={onLoadMore()}>
        Load more
      </ButtonLoad>
    </>
  );
};

export default ButtonLoadMore;
