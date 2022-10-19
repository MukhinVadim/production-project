import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import { LoginModal } from './LoginModal';

describe('LoginModal', () => {
  test('Test render', () => {
    componentRender(<LoginModal isOpen onClose={jest.fn()} />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
