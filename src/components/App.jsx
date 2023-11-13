import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchPixabayImg } from './services/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: {},
    page: 1,
    isLoading: false,
    error: null,
    isLoadMore: false,
    isOpen: false,
    totalHits: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const fetchImages = await fetchPixabayImg(query, page);
        const { hits, totalHits } = fetchImages;

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits,
        }));

        if (!totalHits) {
          return toast.info('Images not found.Please try again');
        }
      } catch (error) {
        return toast.error(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleInputSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  isLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = image => {
    this.setState({ isOpen: true, largeImageURL: image });
    console.log('Image clicked:', image);
  };

  onCloseModal = () => {
    this.setState({ isOpen: false, largeImageURL: '' });
  };

  render() {
    const { images, largeImageURL, isLoading, isOpen, totalHits } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleInputSubmit} />
        <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        {isLoading && <Loader />}

        {images.length > 0 && images.length < totalHits && (
          <Button onClick={this.isLoadMore} />
        )}

        {isOpen && <Modal largeImages={largeImageURL} images={images} onCloseModal={this.onCloseModal} />}
        <ToastContainer />
      </StyledApp>
    );
  }
}
