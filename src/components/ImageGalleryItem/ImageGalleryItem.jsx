import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getItemClick,
}) => {
  const onClickImage = () => {
    getItemClick(largeImageURL);
  };
  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} onClick={onClickImage} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getItemClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
