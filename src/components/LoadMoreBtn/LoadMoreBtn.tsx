import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProp> = ({ onLoadMore }) => {
  return (
    <div className={css.loadContainer}>
      <button className={css.loadBtn} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
