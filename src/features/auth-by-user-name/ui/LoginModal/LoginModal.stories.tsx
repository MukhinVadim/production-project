import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginModal } from './LoginModal';

export default {
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'LoginModal',
};
