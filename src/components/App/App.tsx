import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import fetchImages from "../fetchImages/fetchImages";
import { useState, useEffect } from "react";
import { Images } from "../fetchImages/fetchImages";

interface SelectedImage {
  alt: string;
  url: string;
}

function App() {
  const [request, setRequest] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Images[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<SelectedImage>({
    alt: "",
    url: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (request) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const requestData = await fetchImages(request, page);
          setImages((prevImages) =>
            page === 1
              ? requestData.results
              : [...prevImages, ...requestData.results]
          );
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [request, page]);

  const handleSearch = (value: string) => {
    setRequest(value);
    setPage(1);
    setError(false);
  };
  function openModal(alt: string | null, url: string) {
    setIsOpen(true);
    setSelectedImages({ alt: alt || "", url });
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImages({ alt: "", url: "" });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} setRequest={setRequest} />
      <Toaster />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={isOpen}
        isClose={closeModal}
        selectedImages={selectedImages}
      />
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;
