import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { requestPost } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: null,
    post: [],
    page: 1,
    status: 'idle', //pending || success || error
    per_page: 12,
    totalHits: null,
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

      this.setState({
        isLastPage: this.isLastPage(),
      });
    }
  }

  isLastPage = () => {
    return this.state.page === Math.ceil(this.state.totalHits / 12);
  };

  fetchPost = async () => {
    const { page, query, per_page } = this.state;

    try {
      this.setState({ status: 'pending' });

      const posts = await requestPost(page, query, per_page);
      console.log(posts);

      this.setState(prevState => ({
        post: [...prevState.post, ...posts.hits],
        totalHits: posts.totalHits,
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

  onClickModal = id => {
    console.log('Modal click');
    const selectedImg = this.state.post.find(img => img.id === id);
    this.setState({ selectedImg, isOpenModal: true });
  };

  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { post, isLastPage, status, isOpenModal, selectedImg } = this.state;

    return (
      <div>
        <Searchbar handlerForm={this.onSubmit} />
        {status === 'pending' && <Loader />}
        {post.length > 0 && (
          <ImageGallery dataPhotos={post} onClickModal={this.onClickModal} />
        )}
        {post.length > 0 && !isLastPage && (
          <Button handlerClick={this.onClickBtn} />
        )}
        {isOpenModal && (
          <Modal dataPhotos={selectedImg} onModalClose={this.onModalClose} />
        )}
      </div>
    );
  }
}
