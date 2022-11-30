import clsx from 'clsx';
import React from 'react';
import { IBasicButtonProps } from '../interfaces';
import { getClassBasedOnVariant } from '../utils';
import styles from './Button.module.scss';

export interface IButtonWithTextAndIconProps extends IBasicButtonProps {
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
}

function getIconPlacementClass(iconPlacement: 'left' | 'right') {
  switch (iconPlacement) {
    case 'left':
      return styles.left;
    case 'right':
      return styles.right;
    default:
      return styles.left;
  }
}

const Button: React.FC<IButtonWithTextAndIconProps> = ({
  onClick,
  children,
  type = 'button',
  classes = [],
  variant = 'filled',
  icon = null,
  iconPlacement = 'left',
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        styles.button,
        getClassBasedOnVariant(styles, variant),
        icon ? styles.textIconButton : styles.textButton,
        icon ? getIconPlacementClass(iconPlacement) : '',
        ...classes
      )}
      {...rest}
    >
      {icon && (
        <div
          style={
            iconPlacement === 'left'
              ? { marginRight: '0.6rem' }
              : { marginLeft: '0.6rem' }
          }
          className={styles.icon}
        >
          {icon}
        </div>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
