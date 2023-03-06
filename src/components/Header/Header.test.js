// Testing for Header Component
import { render, screen } from '@testing-library/react';

import Header from './Header';

//* Test 1
test('should render the header title', () => {
	// Arrange
	render(<Header />);
	// Act
	// Assert
	expect(screen.getByText(/news challenge/i)).toBeInTheDocument();
});
