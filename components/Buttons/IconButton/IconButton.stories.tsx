import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton, { IIconButtonProps } from '.';
import mockIconButtonTemplateProps from './IconButton.mocks';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ...mockIconButtonTemplateProps.filled,
} as IIconButtonProps;
