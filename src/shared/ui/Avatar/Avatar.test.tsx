import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  test('Test render', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
