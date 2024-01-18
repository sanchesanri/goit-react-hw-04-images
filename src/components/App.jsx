import { Component, useRef, useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { requestPost } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export function App() {
  const [query, setQuery] = useState('');
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [per_page, setPer_page] = useState(12);
  const [largeImg, setLargeImg] = useState(null);
  const [altImg, setAltImg] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (query === '' && page === 1) return;
    fetchPost();
  }, [page, query]);

  const fetchPost = async () => {
    try {
      setStatus('pending');
      const posts = await requestPost(page, query, per_page);

      setPost(prevState => [...prevState, ...posts.hits]);
      setShowBtn(page < Math.ceil(posts.totalHits / 12));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const onClickBtn = () => {
    setPage(prevState => prevState + 1);
  };

  const onSubmit = value => {
    if (value === query) return;
    setQuery(value);
    setPost([]);
    setPage(1);
  };

  const onClickModal = (large, alt) => {
    setLargeImg(large);
    setAltImg(alt);
    setIsOpenModal(true);
  };

  const onModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Searchbar handlerForm={onSubmit} />
      {status === 'pending' && <Loader />}
      {post.length > 0 && (
        <ImageGallery dataPhotos={post} onClickModal={onClickModal} />
      )}
      {post.length > 0 && showBtn && <Button handlerClick={onClickBtn} />}
      {isOpenModal && (
        <Modal
          largeImg={largeImg}
          altImg={altImg}
          onModalClose={onModalClose}
        />
      )}
    </div>
  );
}
