import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import { ProfileForm } from './ProfileForm';

describe('ProfileForm', () => {
  test('Test render', () => {
    componentRender(<ProfileForm />);
    expect(screen.getByTestId('profile-form')).toBeInTheDocument();
  });
});
