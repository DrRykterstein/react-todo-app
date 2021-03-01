import { COLLECTION_ID, API_KEY } from "./modules/private.js";
import axios from "axios";

// Fetch unsplash API image data
const fetchBackgroundImageData = async () => {
  try {
    const apiURL = `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?per_page=60&client_id=${API_KEY}`;
    const { data } = await axios.get(apiURL);
    return data;
  } catch(err) {
    console.error(`Unplash API - ${err}`);
  }
}

export default fetchBackgroundImageData;