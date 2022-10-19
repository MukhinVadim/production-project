import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormErrorMessage } from './FormErrorMessage';

export default {
  title: 'UI/FormErrorMessage',
  component: FormErrorMessage,
} as ComponentMeta<typeof FormErrorMessage>;

const Template: ComponentStory<typeof FormErrorMessage> = (args) => (
  <FormErrorMessage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Error message',
};
