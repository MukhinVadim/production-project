import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = () => <Sidebar />;
