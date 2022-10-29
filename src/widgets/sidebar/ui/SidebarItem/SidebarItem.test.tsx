import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import { SidebarItem } from './SidebarItem';

describe('SidebarItem', () => {
  test('Test render', () => {
    componentRender(<SidebarItem to="/">link</SidebarItem>);
    expect(screen.getByText('link')).toBeInTheDocument();
  });
});
