import React from 'react';
import './Typography.module.scss';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  color?: string;
  fontSize?: string;
  style?: any;
  className?: string;
  children?: string;
}

const Typography: React.FC<Props> = ({
  variant,
  color,
  fontSize,
  style,
  className,
  children,
  ...props
}) => {
  switch (variant) {
    case 'h1': {
      return (
        <h1 className={className} style={{ color, fontSize }}>
          {children}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2 className={className} style={{ color, fontSize }}>
          {children}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3 className={className} style={{ color, fontSize }}>
          {children}
        </h3>
      );
    }
    case 'h4': {
      return (
        <h4 className={className} style={{ color, fontSize }}>
          {children}
        </h4>
      );
    }
    case 'h5': {
      return (
        <h5 className={className} style={{ color, fontSize }}>
          {children}
        </h5>
      );
    }
    case 'h6': {
      return (
        <h6 className={className} style={{ color, fontSize }}>
          {children}
        </h6>
      );
    }

    default: {
      return (
        <p className={className} style={{ color, fontSize }}>
          {children}
        </p>
      );
    }
  }
};

export default Typography;
