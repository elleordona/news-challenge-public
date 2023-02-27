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
});
