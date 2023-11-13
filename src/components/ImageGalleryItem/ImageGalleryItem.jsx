import {
  StyledGalleryItem,
  StaledGalleryImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  return (
    <>
      <StyledGalleryItem>
        <StaledGalleryImage
          src={webformatURL}
          alt={tags}
          onClick={() => onOpenModal(largeImageURL)}
        />
      </StyledGalleryItem>
    </>
  );
};
