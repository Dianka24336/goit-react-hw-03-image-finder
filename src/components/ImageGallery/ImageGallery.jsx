import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onOpenModal }) => {
  console.log(images);
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}            А
            tags={tags}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </StyledImageGallery>
  );
};
