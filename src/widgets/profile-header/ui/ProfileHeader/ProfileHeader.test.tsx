import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import { ProfileHeader } from './ProfileHeader';

describe('ProfileHeader', () => {
  test('Test render', () => {
    componentRender(<ProfileHeader />);
    expect(screen.getByTestId('profile-header')).toBeInTheDocument();
  });
});
