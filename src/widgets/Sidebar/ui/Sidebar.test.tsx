import { screen } from '@testing-library/react';
import { renderWithTranslation } from '@config/jest/i18n/renderWithTranslation';
import { withTranslation } from 'react-i18next';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

describe('Button', () => {
  test('Test render', () => {
    const SidebarWithTranslation = withTranslation('translation')(Sidebar);
    renderWithTranslation(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
