import { withStore } from '@config/storybook/decorators/withStore';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileHeader } from './ProfileHeader';

export default {
  component: ProfileHeader,
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
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => (
  <ProfileHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {};
