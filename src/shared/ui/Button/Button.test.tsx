import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test reset class', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('reset');
  });
});
