import React, { Component } from 'react';
import { Overlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImages, images } = this.props;

    console.log('Large Images:', largeImages);
    return (
      <Overlay onClick={this.onOverlayClick}>
        <StyledModal>
          <img src={largeImages} alt={images.tags} />
        </StyledModal>
      </Overlay>
    );
  }
}
