import css from "./ImageCard.module.css";
import { BiSolidLike } from "react-icons/bi";

const ImageCard = ({ alt, urlSm, urlReg, likes, username, openModal }) => {
  return (
    <>
      <div className={css.card}>
        <img
          className={css.cardImage}
          onClick={() => openModal(alt, urlReg)}
          width="400"
          height="300"
          src={urlSm}
          alt={alt}
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
