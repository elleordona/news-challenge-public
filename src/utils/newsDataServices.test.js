// testing for newsDataServices

// imports
import axiosMock from 'axios';

import { getArticleDataAsync } from './newsDataServices';

jest.mock('axios');

describe('getArticleDataAsync tests', () => {
	//* Test 6
	test('should actually make the external call data call', () => {
		// Arrange
		const testData = [{ id: 1, fields: { headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` } }];
		axiosMock.get.mockResolvedValueOnce(testData);
		// Act
		getArticleDataAsync();
		// Assert
		expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
	});

	//* Test 7
	test('should have successful request returning the right data', async () => {
		// Arrange
		const testData = [{ id: 1, fields: { headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` } }];
		axiosMock.get.mockResolvedValueOnce(testData);
		// Act
		const result = await getArticleDataAsync();
		// Assert
		expect(result).toEqual(testData.data);
	});

	//* Test 8
	test('should have unsuccessful request returning the error object', async () => {
		// Arrange
		const error = { error: `Error` };
		axiosMock.get.mockRejectedValueOnce(error);
		// Act
		const result = await getArticleDataAsync();
		// Assert
		expect(result).toEqual(error);
	});
});
