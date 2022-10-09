import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';

describe('Navbar', () => {
  test('Test render', () => {
    const NavbarWithTranslations = withTranslation('translation')(Navbar);
    componentRender(<NavbarWithTranslations />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
