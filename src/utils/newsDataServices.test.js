// testing for newsDataServices

// imports
import axiosMock from 'axios';

import { getArticleDataAsync } from './newsDataServices';

jest.mock('axios');

describe('getArticleDataAsync tests', () => {
	test('should actually make the external call data call', () => {
		// Arrange
		const testData = { results: [{ headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` }] };
		axiosMock.get.mockResolvedValueOnce(testData);
		// Act
		getArticleDataAsync();
		// Assert
		expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
	});
});
