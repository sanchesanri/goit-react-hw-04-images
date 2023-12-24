import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { requestPost } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: null,
    post: [],
    page: 1,
    status: 'idle', //pending || success || error
    per_page: 12,
    error: false,
    totalHits: null,
    isLastPage: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.status);
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchPost();

      this.setState({
        // status: 'success',
        isLastPage: this.isLastPage()
      })
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
        status: 'success'
      }));
    } catch (error) {
      console.log(error);
    }
  };

  onClick = () => {
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

  render() {
    const { post, isLastPage, status } = this.state;

    return (
      <div>
        <Searchbar handlerForm={this.onSubmit} />
        {/* {Array.isArray(post) && <ImageGallery dataPhotos={post} />}
        {Array.isArray(post) && <Button handlerClick={this.onClick} />} */}
        {status === 'pending' && <Loader />}
        {post.length > 0 && <ImageGallery dataPhotos={post} />}
        {post.length > 0 && !isLastPage && <Button handlerClick={this.onClick} />}
      </div>
    );
  }
}
