// AppLink.stories.ts|tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';

export default {
  title: 'UI/AppLink',
  component: AppLink,
  args: {
    to: '/to',
  },
} as ComponentMeta<typeof AppLink>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AppLink> = (args) => (<AppLink {...args} />);

export const Default = Template.bind({});

Default.args = {
  children: 'Link',
};
