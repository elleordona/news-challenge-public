// getting data from the server

// imports
import axios from 'axios';

export const getArticleDataAsync = async () => {
	try {
		const responseData = await axios.get('http://localhost:4000/results');
		return responseData.data;
	} catch (e) {
		return { error: `Error` };
	}
};
