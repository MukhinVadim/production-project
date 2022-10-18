import { render, screen } from '@testing-library/react';
import { FormErrorMessage } from './FormErrorMessage';

describe('FormErrorMessage', () => {
  test('Test render', () => {
    render(<FormErrorMessage>Error message</FormErrorMessage>);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
