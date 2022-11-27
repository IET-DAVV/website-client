import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButtonWithTextAndIconProps } from '.';
import { mockButtonTemplateProps } from './Button.mocks';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...mockButtonTemplateProps.withoutIcon,
} as IButtonWithTextAndIconProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...mockButtonTemplateProps.withIcon,
} as IButtonWithTextAndIconProps;
