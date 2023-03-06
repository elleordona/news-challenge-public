// Testing for Footer Component

// imports
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

//* Test 2
test('should render the same snapshot', () => {
	// Arrange
	render(<Footer />);

	// Act
	// Assert
	expect(screen.getByText(/digital futures/i)).toBeInTheDocument();
});
