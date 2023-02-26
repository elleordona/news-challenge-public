// Testing for ArticleList Component

// imports
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

//* Test 3
xtest('should render the same snapshot', () => {
	// Arrange
	const view = render(<ArticleList />);

	// Act
	// Assert
	expect(view).toMatchSnapshot();
});
