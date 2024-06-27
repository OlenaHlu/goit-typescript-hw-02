import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

interface LoaderProp {
  isVisible: boolean;
}

const Loader: React.FC<LoaderProp> = (isVisible) => {
  return (
    <div className={css.loaderContainer}>
      <RotatingLines
        visible={isVisible}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
