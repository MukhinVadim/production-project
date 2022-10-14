import { render, screen } from '@testing-library/react';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
  test('Test render', () => {
    render(<LoginModal isOpen onClose={jest.fn()} />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
