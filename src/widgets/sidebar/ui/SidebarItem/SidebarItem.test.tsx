import { render, screen } from '@testing-library/react';
import { SidebarItem } from './SidebarItem';

describe('SidebarItem', () => {
  test('Test render', () => {
    render(<SidebarItem to="/">link</SidebarItem>);
    expect(screen.getByTestId('sidebar-item')).toBeInTheDocument();
  });
});
