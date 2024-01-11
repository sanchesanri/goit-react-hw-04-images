import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { requestPost } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    1: 1,
    query: null,
    post: [],
    page: 1,
    status: 'idle', //pending || success || error
    per_page: 12,
    largeImg: null,
    altImg: null,
    showBtn: false,
    isLastPage: false,
    isOpenModal: false,
    selectedImg: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchPost();
    }
  }

  fetchPost = async () => {
    const { page, query, per_page } = this.state;

    try {
      this.setState({ status: 'pending' });

      const posts = await requestPost(page, query, per_page);

      this.setState(prevState => ({
        post: [...prevState.post, ...posts.hits],

        showBtn: this.state.page < Math.ceil(posts.totalHits / 12),
        status: 'success',
      }));
    } catch (error) {
      this.setState({ status: 'error' });
    }
  };

  onClickBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = value => {
    if (value === this.state.query) return;
    this.setState({
      query: value,
      post: [],
      page: 1,
    });
  };

  onClickModal = (large, alt) => {
    this.setState({ largeImg: large, altImg: alt, isOpenModal: true });
  };

  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { post, status, isOpenModal, showBtn, largeImg, altImg } = this.state;

    return (
      <div>
        <Searchbar handlerForm={this.onSubmit} />
        {status === 'pending' && <Loader />}
        {post.length > 0 && (
          <ImageGallery dataPhotos={post} onClickModal={this.onClickModal} />
        )}
        {post.length > 0 && showBtn && (
          <Button handlerClick={this.onClickBtn} />
        )}
        {isOpenModal && (
          // <Modal dataPhotos={selectedImg} onModalClose={this.onModalClose} />
          <Modal
            largeImg={largeImg}
            altImg={altImg}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}
