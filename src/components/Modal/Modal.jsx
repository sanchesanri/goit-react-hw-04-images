import { useEffect } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export function Modal({ largeImg, altImg, onModalClose }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, []);

  function closeModalEsc(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }

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
// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeModalEsc);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeModalEsc);
//   }

//   closeModalEsc = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onModalClose();
//     }
//   };

//   backdropCloseModal = evt => {
//     if (evt.target === evt.currentTarget) {
//       this.props.onModalClose();
//     }
//   };
//   render() {
//     const { largeImg, altImg } = this.props;

//     return (
//       <Overlay onClick={this.backdropCloseModal}>
//         <ModalStyle>
//           <img src={largeImg} alt={altImg} />
//         </ModalStyle>
//       </Overlay>
//     );
//   }
// }
