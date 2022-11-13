import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  test('Test render', () => {
    render(<Text>Text</Text>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
