import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
const ImageGallery = ({ items, getItemClick }) => {
  return (
    <List>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          getItemClick={getItemClick}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  getItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
