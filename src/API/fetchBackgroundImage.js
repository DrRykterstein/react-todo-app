import axios from "axios";

// Fetch unsplash API image data
const fetchBackgroundImageData = async () => {
	try {
		const apiURL = `
      https://api.unsplash.com/collections/${process.env.REACT_APP_COLLECTION_ID}/photos?per_page=60&client_id=${process.env.REACT_APP_API_KEY}
    `;
		const { data } = await axios.get(apiURL);
		return data;
	} catch (err) {
		console.error(`Unplash API - ${err}`);
	}
};

export default fetchBackgroundImageData;
