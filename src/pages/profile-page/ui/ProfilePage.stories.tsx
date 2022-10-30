import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';

export default {
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});

Default.args = {};
