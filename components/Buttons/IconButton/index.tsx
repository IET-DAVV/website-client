import clsx from 'clsx';
import React from 'react';
import { IBasicButtonProps } from '../interfaces';
import { getClassBasedOnVariant } from '../utils';
import styles from './IconButton.module.scss';

export interface IIconButtonProps extends Omit<IBasicButtonProps, 'children'> {
  icon: React.ReactNode;
}

const IconButton: React.FC<IIconButtonProps> = ({
  onClick,
  type = 'button',
  classes = [],
  variant = 'filled',
  icon = null,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        styles.button,
        styles.iconButton,
        getClassBasedOnVariant(styles, variant),
        ...classes
      )}
      {...rest}
    >
      <div className={styles.icon}>{icon}</div>
    </button>
  );
};

export default IconButton;
