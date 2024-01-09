import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, thumb, large, alt, onClickModal }) => {
  return (
    <Item key={id}>
      <Img
        src={thumb}
        alt={alt}
        onClick={() => {
          onClickModal(large, alt);
        }}
      />
    </Item>
  );
};
