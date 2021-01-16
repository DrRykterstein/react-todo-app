import { COLLECTION_ID, API_KEY } from "./modules/private.js";
import axios from "axios";

// Fetch unsplash API image data
const fetchBackgroundImageData = async () => {
  try {
    const apiURL = `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?per_page=30&client_id=${API_KEY}`;
    const { data } = await axios.get(apiURL);
    return data;
  } catch(err) {
    console.error(`Unplash API - ${err}`);
  }
}

// Fetch Todo-List API data
// const fetchTodoData = async () => {
//   try {
//     const apiURL = 'https://jsonplaceholder.typicode.com/todos';
//     const { data } = await axios.get(apiURL);
//     console.log(data);
//     return data;
//   } catch(err) {
//     console.error(`Todo API - ${err}`);
//   }
// }

export default fetchBackgroundImageData;