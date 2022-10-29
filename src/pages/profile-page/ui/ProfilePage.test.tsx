import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  test('Test render', () => {
    render(<ProfilePage />);
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
});
