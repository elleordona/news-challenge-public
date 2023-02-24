// Testing for Footer Component

// imports
import { render } from '@testing-library/react';
import Footer from './Footer';

//* Test 2
test('should render the same snapshot', () => {
	// Arrange
	const view = render(<Footer />);

	// Act
	// Assert
	expect(view).toMatchSnapshot();
});
