import axios from "axios";

const API_KEY = "WOfkb1H9YtW-8IurrbIImlLbSoPzdgRWtq5GrZREa4g";
const BASE_URL = "https://api.unsplash.com/search/photos";

export interface Images {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  user: {
    name: string;
  };
  likes: number;
}

interface FetchImagesResponse {
  results: Images[];
  total: number;
  total_pages: number;
}

const fetchImages = async (
  value: string,
  page: number
): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>(BASE_URL, {
      params: {
        client_id: API_KEY,
        query: value,
        page: page,
        per_page: 9,
        orientation: "landscape",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error fetching images:", error.message || error);
    throw error;
  }
};

export default fetchImages;
