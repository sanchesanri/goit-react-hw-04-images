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
    const { largeImg, altImg } = this.props;

    return (
      <Overlay onClick={this.backdropCloseModal}>
        <ModalStyle>
          <img src={largeImg} alt={altImg} />
        </ModalStyle>
      </Overlay>
    );
  }
}
