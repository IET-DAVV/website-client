import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { BasicButtonProps } from '../interfaces';

function getClassBasedOnVariant(variant: 'primary' | 'secondary' | 'tertiary') {
  //Refer to the variant property in the BasicButtonProps interface
  switch (variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    case 'tertiary':
      return styles.tertiary;
    default:
      return styles.primary;
  }
}

interface ButtonWithTextAndIconProps extends BasicButtonProps {
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
}

const Button: React.FC<ButtonWithTextAndIconProps> = ({
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
        getClassBasedOnVariant(variant),
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

interface IconButtonProps extends Omit<BasicButtonProps, 'children'> {
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  type = 'button',
  classes = [],
  variant = 'primary',
  icon = null,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        styles.button,
        styles.iconButton,
        getClassBasedOnVariant(variant),
        ...classes
      )}
      {...rest}
    >
      <div className={styles.icon}>{icon}</div>
    </button>
  );
};

export { Button, IconButton };
