import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: `https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg`,
  alt: 'avatar',
};
