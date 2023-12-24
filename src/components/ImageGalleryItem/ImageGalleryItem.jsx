import { Img, Item } from "./ImageGalleryItem.styled"


export const ImageGalleryItem = ({ id, thumb, large, alt, }) => {
    return (
        <Item>
            {/* <a href="large" onClick={handleClick}> */}
            <a href={large} id={id}>
                <Img src={thumb} alt={alt} />
            </a>
        </Item>)
}
