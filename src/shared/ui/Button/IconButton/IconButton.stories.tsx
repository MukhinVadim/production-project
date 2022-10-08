import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sun from 'shared/ui/icons/sun.svg';
import { IconButton } from './IconButton';

export default {
  title: 'UI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'IconButton',
  icon: <Sun />,
};
