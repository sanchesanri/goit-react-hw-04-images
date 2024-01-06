import { Component } from 'react';
import { ModalST, OverlayST } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {}
  render() {
    return (
      <OverlayST>
        <ModalST></ModalST>
      </OverlayST>
    );
  }
}
