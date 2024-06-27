import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Images } from "../fetchImages/fetchImages";

interface ImageGalleryProps {
  images: Images[];
  openModal: (alt: string | null, url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
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
