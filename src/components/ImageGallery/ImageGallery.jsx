import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryST } from './ImageGallery.styled';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

// export const ImageGallery = ({ dataPhotos, onCardClick }) => (
export const ImageGallery = ({ dataPhotos, onClickModal }) => {
  const uniqueKey = useRef();
  return (
    <ImageGalleryST>
      {dataPhotos?.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={(uniqueKey.current = uuidv4())}
          onClickModal={onClickModal}
          id={id}
          thumb={webformatURL}
          large={largeImageURL}
          alt={tags}
        />
      ))}
    </ImageGalleryST>
  );
};
