import axios from "axios";

const API_KEY = "WOfkb1H9YtW-8IurrbIImlLbSoPzdgRWtq5GrZREa4g";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchImages = async (value, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        client_id: API_KEY,
        query: value,
        page: page,
        per_page: 9,
        orientation: "landscape",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error.message || error);
    throw error;
  }
};

export default fetchImages;
