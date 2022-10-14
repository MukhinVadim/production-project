import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageError } from './PageError';

export default {
  title: 'Widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

export const Primary: ComponentStory<typeof PageError> = () => <PageError />;
