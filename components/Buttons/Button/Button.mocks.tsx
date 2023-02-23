import Image from 'next/image';
import { IButtonWithTextAndIconProps } from '.';
import { icons } from '../../../assets';

const { discord } = icons;

const withoutIcon: IButtonWithTextAndIconProps = {
  children: 'Click Me',
  onClick: () => {},
  type: 'button',
  variant: 'filled',
};
const withIcon: IButtonWithTextAndIconProps = {
  children: 'Click Me',
  icon: <Image layout="fill" src={discord} alt="This is discord" />,
  iconPlacement: 'left',
  onClick: () => {},
  type: 'button',
  variant: 'filled',
};

export default { withoutIcon, withIcon };
