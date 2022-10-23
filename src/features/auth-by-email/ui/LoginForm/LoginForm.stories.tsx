import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withStore } from '@config/storybook/decorators/withStore';
import LoginForm from './LoginForm';

export default {
  title: 'features/auth-by-user-name/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const Error = Template.bind({});

Error.args = {};
Error.decorators = [
  withStore({
    signIn: {
      isLoading: true,
      error: {
        code: 'auth/wrong-password',
      },
    },
  }),
];
