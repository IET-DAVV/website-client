import { icons } from '../../../assets';
import { IButtonWithTextAndIconProps } from '../interfaces';
const { discord } = icons;

const withoutIcon: IButtonWithTextAndIconProps = {
  children: 'Click Me',
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};
const withIcon: IButtonWithTextAndIconProps = {
  children: 'Click Me',
  icon: <img src={discord} alt="This is discord" />,
  iconPlacement: 'left',
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};

export const mockButtonTemplateProps = {
  withoutIcon,
  withIcon,
};
