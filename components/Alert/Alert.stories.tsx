import { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert, { IAlertProps } from '.';
import MockAlert from './Alert.mocks';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...MockAlert,
} as IAlertProps;
