import { screen } from '@testing-library/react';
import { componentRender } from '@config/jest/componentRender';
import { withTranslation } from 'react-i18next';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    const SidebarWithTranslation = withTranslation('translation')(Sidebar);
    componentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
