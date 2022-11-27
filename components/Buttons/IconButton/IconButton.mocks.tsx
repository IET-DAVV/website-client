import { icons } from '../../../assets';
import { IIconButtonProps } from '../interfaces';

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

export const mockIconButtonTemplateProps = {
  primary,
  secondary,
  tertiary,
};
