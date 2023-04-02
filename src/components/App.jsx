import { Component } from 'react';
import { Container } from './Container/Container.styled';
import Search from './Searchbar/Searchbar';
import fetchImages from './services/API';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
export class App extends Component {
  state = {
    searchText: '',
    images: [],
    error: null,
    page: 1,
    isLoading: false,
    isShowModal: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.getDataImages();
    }
  }

  getDataImages = async () => {
    const { searchText, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { hits } = await fetchImages(searchText, page);
      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));
    } catch (error) {
      this.setState({ error: 'Oops something went wrong...' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  createSearchText = searchText => {
    this.setState({ images: [], searchText, page: 1 });
  };

  onLoadMore = () => {};

  imageClick = imageUrl => {
    this.setState({ modalImage: imageUrl, isShowModal: true });
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };

  render() {
    const { images, isShowModal, modalImage, isLoading, error } = this.state;
    const lengthImages = images.length >= 12;
    return (
      <Container>
        <Search createSearchText={this.createSearchText} />
        {error}
        <ImageGallery items={images} getItemClick={this.imageClick} />
        {isLoading && <Loader />}
        {lengthImages && (
          <ButtonLoadMore onLoadMore={() => this.getDataImages} />
        )}
        {isShowModal && <Modal image={modalImage} onClose={this.toggleModal} />}
      </Container>
    );
  }
}
