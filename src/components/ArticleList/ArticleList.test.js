// Testing for ArticleList Component

// imports
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';
import testData from '../../../mockNewsData2.json';

describe('ArticleList tests', () => {
	describe('ArticleList conditional render tests', () => {
		//* Test 3
		test('should display "Articles are loading..." when data length is 0', () => {
			// Arrange
			// Act
			render(<ArticleList data={[]} />);
			// render ArticleList with no data
			// Assert
			expect(screen.getByText(/articles are loading.../i)).toBeInTheDocument();
		});
		//* Test 4
		test('should display list of people when data contains article objects', () => {
			// Arrange
			render(<ArticleList data={testData.results} />);
			const articleList = screen.getAllByRole(`listitem`);
			// Act
			// Assert
			expect(articleList.length).toBe(testData.results.length);
		});
	});
	//* Test 5
	test('should have an image in the document', () => {
		// Arrange
		render(<ArticleList data={testData.results} />);
		const image = screen.getAllByRole('img');
		// Act
		// Assert
		expect(image.length).toBe(testData.results.length);
		// the amount of images in the document is the same as the amount of articles
	});
});
