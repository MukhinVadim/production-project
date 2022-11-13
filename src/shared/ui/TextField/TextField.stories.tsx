import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'UI/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Введите текст',
  label: 'Текст',
};

export const Required = Template.bind({});

Required.args = {
  placeholder: 'Введите текст',
  label: 'Текст',
  required: true,
};
