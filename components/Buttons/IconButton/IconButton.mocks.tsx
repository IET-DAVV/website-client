import { IIconButtonProps } from '.';
import { icons } from '../../../assets';

const { discord } = icons;

const primary: IIconButtonProps = {
  icon: <img src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};

const secondary: IIconButtonProps = {
  icon: <img src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'secondary',
};
const tertiary: IIconButtonProps = {
  icon: <img src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'tertiary',
};

export default { primary, secondary, tertiary };
