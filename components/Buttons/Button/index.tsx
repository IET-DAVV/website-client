import clsx from 'clsx';
import React from 'react';
import { IBasicButtonProps } from '../interfaces';
import { getClassBasedOnVariant } from '../utils';
import styles from './Button.module.scss';

export interface IButtonWithTextAndIconProps extends IBasicButtonProps {
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
}

const Button: React.FC<IButtonWithTextAndIconProps> = ({
  onClick,
  children,
  type = 'button',
  classes = [],
  variant = 'primary',
  icon = null,
  iconPlacement = 'left',
  ...rest
}) => {
  console.log({ test: classes, rest, icon });
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        styles.button,
        getClassBasedOnVariant(styles, variant),
        icon ? styles.textIconButton : styles.textButton,
        icon ? (iconPlacement === 'right' ? styles.right : styles.left) : '',
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
