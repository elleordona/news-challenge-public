// testing for App

// imports
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as dataService from './utils/newsDataServices';

jest.mock('./utils/newsDataServices');

describe('App Component Tests', () => {
	describe('getArticle tests', () => {
		//* Test 9
		test('should make a call to getArticleData when useEffect is called', async () => {
			// Arrange
			const expectedReturn = [{ id: 1, fields: { headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` } }];
			dataService.getArticleDataAsync.mockImplementation(() => expectedReturn);
			render(<App />);
			// Assert
			const result = dataService.getArticleDataAsync;
			// Act
			await waitFor(() => expect(result).toHaveBeenCalledTimes(1));
		});

		//* Test 10
		test('should render the returned headline in a list', async () => {
			// Arrange
			const expectedReturn = [{ id: 1, fields: { headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` } }];
			dataService.getArticleDataAsync.mockImplementation(() => expectedReturn);
			render(<App />);
			// Act
			const testHeadlineItem = await screen.findByText(expectedReturn[0].fields.headline);
			// Assert
			expect(testHeadlineItem).toBeInTheDocument();
		});

		//* Test 11
		test('should render the "no data" message when an error is returned', async () => {
			// Arrange
			const expectedReturn = { error: `Error` };
			dataService.getArticleDataAsync.mockImplementation(() => expectedReturn);
			render(<App />);
			// Act
			const noData = await screen.findByText(/no data/i, { exact: false });
			// Assert
			expect(noData).toBeInTheDocument();
		});

		//* Test 12
		test('should render the returned thumbnail in a list', async () => {
			// Arrange
			const expectedReturn = [{ id: 1, fields: { headline: `testHeadline`, thumbnail: `https://media.glassdoor.com/sqll/4202510/digital-futures-squareLogo-1617292955646.png` } }];
			dataService.getArticleDataAsync.mockImplementation(() => expectedReturn);
			render(<App />);
			// Act
			const testThumbnailItem = await screen.findByRole('img');
			// Assert
			expect(testThumbnailItem).toBeInTheDocument();
		});
	});
});
