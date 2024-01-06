import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryST } from './ImageGallery.styled';
import { v4 as uuidv4 } from 'uuid';

// export const ImageGallery = ({ dataPhotos, onCardClick }) => (
export const ImageGallery = ({ dataPhotos, onClickModal }) => (
  <ImageGalleryST>
    {dataPhotos?.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={uuidv4()}
        onClickModal={onClickModal}
        id={id}
        thumb={webformatURL}
        large={largeImageURL}
        alt={tags}
      />
    ))}
  </ImageGalleryST>
);
