import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SidebarItem } from './SidebarItem';

export default {
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => (
  <SidebarItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'SidebarItem',
};
