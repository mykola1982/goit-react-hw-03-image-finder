import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <Item onClick={this.openModal}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
