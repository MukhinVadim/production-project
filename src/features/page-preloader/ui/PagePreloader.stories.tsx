import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PagePreloader } from './PagePreloader';

export default {
  title: 'features/page-preloader',
  component: PagePreloader,
} as ComponentMeta<typeof PagePreloader>;

const Template: ComponentStory<typeof PagePreloader> = (args) => (
  <PagePreloader {...args} />
);

export const Default = Template.bind({});
