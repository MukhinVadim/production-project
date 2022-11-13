import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  test('Test render', () => {
    componentRender(<ProfilePage />);
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
});
