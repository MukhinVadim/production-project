import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('Test render', () => {
    render(<IconButton icon={<div />} />);
    expect(screen.getByTestId('icon-button')).toBeInTheDocument();
  });
});
