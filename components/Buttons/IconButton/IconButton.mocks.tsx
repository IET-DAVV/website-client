import Image from 'next/image';
import { IIconButtonProps } from '.';
import { icons } from '../../../assets';

const { discord } = icons;

const filled: IIconButtonProps = {
  icon: <Image layout="fill" src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'filled',
};

const outlined: IIconButtonProps = {
  icon: <Image layout="fill" src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'outlined',
};
const text: IIconButtonProps = {
  icon: <Image layout="fill" src={discord} alt="This is discord" />,
  onClick: () => {},
  type: 'button',
  variant: 'text',
};

export default { filled, outlined, text };
