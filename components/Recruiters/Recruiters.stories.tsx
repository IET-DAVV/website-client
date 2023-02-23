import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseTemplate, { RecruiterProps } from '.';
import mockBaseTemplateProps from './Recruiters.mocks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Recruiters',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockBaseTemplateProps.base,
} as RecruiterProps;

