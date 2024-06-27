import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";

import { Toaster } from "react-hot-toast";

import fetchImages from "../fetchImages/fetchImages";

import { useState } from "react";

function App() {
  const [request, setRequest] = useState(""); //поточний термін пошуку
  const [page, setPage] = useState(1); // поточна сторінка даних для завантаження наступної порції зображень
  const [images, setImages] = useState([]); // масив зображень, які будуть відображені в галереї
  const [isOpen, setIsOpen] = useState(false); // стан для відстеження відкриття/закриття модального вікна зображення
  const [selectedImages, setSelectedImages] = useState({ alt: "", url: "" }); //URL та ALT вибраного зображення для відображення в модальному вікні
  const [loading, setLoading] = useState(false); // стан відстеження процесу завантаження даних
  const [error, setError] = useState(false); // стан відстеження помилки

  const handleSearch = async (value) => {
    try {
      setImages([]);
      setPage(1);
      setError(false);
      setLoading(true);

      const requestData = await fetchImages(value, page);
      setImages(requestData.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  function openModal(alt, url) {
    setIsOpen(true);
    setSelectedImages({ alt, url });
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImages({ alt: "", url: "" });
  }

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const requestData = await fetchImages(request, nextPage);
      setImages([...images, ...requestData.results]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
      {loading && <Loader isVisible={loading} />}
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
