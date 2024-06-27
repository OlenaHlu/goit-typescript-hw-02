import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, isClose, selectedImages }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      ariaHideApp={false}
    >
      <img src={selectedImages.url} alt={selectedImages.alt} />
    </ReactModal>
  );
};
export default ImageModal;
