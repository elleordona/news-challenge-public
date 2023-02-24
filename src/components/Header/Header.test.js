// Testing for Header Component
import { render } from '@testing-library/react';

import Header from './Header';

//* Test 1
test('should render the same snapshot', () => {
	// Arrange
	const view = render(<Header />);
	// Act
	// Assert
	expect(view).toMatchSnapshot();
});
