import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
