// getting data from the server

// imports
// const axios = require('axios');
import axios from 'axios';

export const getArticleDataAsync = async () => {
	try {
		const responseData = await axios.get(process.env.REACT_APP_DATA_SERVICE_URL);

		// if statement because test and development/production urls need different return values
		if (process.env.REACT_APP_DATA_SERVICE_URL === 'http://localhost:4000/results') return responseData.data;
		if (process.env.REACT_APP_DATA_SERVICE_URL === 'https://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2Cbyline%2CbodyText&api-key=191cff44-153d-4f2f-ab2d-fa8eb74c39d7') return responseData.data.response.results;
	} catch (e) {
		return { error: `Error` };
	}
};
