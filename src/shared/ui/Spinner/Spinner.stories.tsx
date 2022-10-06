import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => <Spinner />;
