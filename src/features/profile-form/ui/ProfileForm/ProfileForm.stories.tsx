import { withStore } from '@config/storybook/decorators/withStore';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

export default {
  component: ProfileForm,
  decorators: [
    withStore({
      user: {
        user: {
          displayName: 'User Name',
          photoURL:
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
        },
      },
    }),
  ],
} as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = (args) => (
  <ProfileForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
