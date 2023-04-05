import { Component } from 'react';
import { Container } from './Container/Container.styled';
import Search from './Searchbar/Searchbar';
import fetchImages from '../services/API';
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
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchImages(searchText, page);

        if (data.hits.length === 0) {
          this.setState({ error: 'Something went wrong. Please try again!' });
        }
        this.setState({
          totalImages: data.totalHits,
        });
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
          };
        });
      } catch (error) {
        this.setState({ error: 'Oops something went wrong...' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getDataImages = async () => {};

  createSearchText = searchText => {
    this.setState({ images: [], searchText, page: 1 });
  };

  imageClick = imageUrl => {
    this.setState({ modalImage: imageUrl, isShowModal: true });
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };

  onLoadMore = () => {
    this.setState(prevState => {
      // console.log('onLoadMore');
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isShowModal, modalImage, isLoading, error } = this.state;
    const lengthImages = images.length >= 12;
    return (
      <Container>
        <Search createSearchText={this.createSearchText} />
        {error}
        {images.length > 0 && (
          <ImageGallery items={images} getItemClick={this.imageClick} />
        )}
        {isLoading && <Loader />}
        {!isLoading && lengthImages && (
          <ButtonLoadMore onLoadMore={() => this.onLoadMore} />
        )}
        {isShowModal && <Modal image={modalImage} onClose={this.toggleModal} />}
      </Container>
    );
  }
}
