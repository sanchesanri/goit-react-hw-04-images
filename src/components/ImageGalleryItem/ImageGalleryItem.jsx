import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, thumb, large, alt, onClickModal }) => {
  const handleClick = e => {
    e.preventDefault();
    onClickModal(id);
  };
  return (
    <Item>
      {/* <a href="large" onClick={handleClick}> */}
      <a href={large} id={id} onClick={handleClick}>
        <Img src={thumb} alt={alt} />
      </a>
    </Item>
  );
};
