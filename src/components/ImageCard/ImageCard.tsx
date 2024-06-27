import css from "./ImageCard.module.css";
import { BiSolidLike } from "react-icons/bi";

interface ImageCardProps {
  alt: string | null;
  urlSm: string;
  urlReg: string;
  likes: number;
  username: string;
  openModal: (alt: string | null, url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  alt,
  urlSm,
  urlReg,
  likes,
  username,
  openModal,
}) => {
  return (
    <>
      <div className={css.card}>
        <img
          className={css.cardImage}
          onClick={() => openModal(alt || null, urlReg)}
          width="400"
          height="300"
          src={urlSm}
          alt={alt ?? "Image"}
        />
        <div className={css.imageInfo}>
          <p className={css.cardText}>{username}</p>
          <p className={css.cardText}>
            <BiSolidLike className={css.icon} />
            {likes}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
