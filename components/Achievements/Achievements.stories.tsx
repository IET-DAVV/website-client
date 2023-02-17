import { ComponentMeta, ComponentStory } from '@storybook/react';
import Achievements, { AchievementProps } from '.';
import mockBaseTemplateProps from './Achievements.mocks';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Achievements',
  component: Achievements,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Achievements>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Achievements> = (args) => (
  <Achievements {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBaseTemplateProps.base,
} as AchievementProps;
export const Alternate = Template.bind({});
Alternate.args = {
  ...mockBaseTemplateProps.alt,
} as AchievementProps;
