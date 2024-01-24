import { useEffect } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export function Modal({ largeImg, altImg, onModalClose }) {
  useEffect(() => {
    function closeModalEsc(evt) {
      if (evt.code === 'Escape') {
        onModalClose();
      }
    }

    window.addEventListener('keydown', closeModalEsc);

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, [onModalClose]);

  const backdropCloseModal = evt => {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  };

  return (
    <Overlay onClick={backdropCloseModal}>
      <ModalStyle>
        <img src={largeImg} alt={altImg} />
      </ModalStyle>
    </Overlay>
  );
}
