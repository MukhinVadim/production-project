import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  test('Test render', () => {
    render(<TextField />);
    expect(screen.getByTestId('text-field')).toBeInTheDocument();
  });
});
