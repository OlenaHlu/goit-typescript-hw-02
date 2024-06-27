import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.messageError}>
      Uh oh! It seems there was an error loading the images. Please refresh the
      page and try again.
    </p>
  );
};

export default ErrorMessage;
