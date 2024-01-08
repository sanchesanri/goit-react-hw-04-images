import { Component } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  closeModalEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  backdropCloseModal = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onModalClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props.dataPhotos;
    return (
      <Overlay onClick={this.backdropCloseModal}>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} />
        </ModalStyle>
      </Overlay>
    );
  }
}
