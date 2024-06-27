import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.galleryList}>
        {images.map((image) => {
          return (
            <li className={css.galleryItem} key={image.id}>
              <ImageCard
                urlSm={image.urls.small}
                urlReg={image.urls.regular}
                alt={image.description}
                likes={image.likes}
                username={image.user.name}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
