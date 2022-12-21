import React from 'react';
import { Button } from '..';
import styles from './Alert.module.scss';

interface IAlertProps {
  id: string;
  message: string;
  autoClose: boolean;
  type: string;
  onClose: (id: string) => void;
}

function getBgColor(type: string) {
  switch (type) {
    case 'success':
      return styles.success;
    case 'error':
      return styles.error;
    case 'warning':
      return styles.warning;
    case 'info':
      return styles.info;
    default:
      return styles.info;
  }
}
const Alert: React.FC<IAlertProps> = ({
  id,
  message,
  autoClose,
  type,
  onClose,
}) => {
  const bgcolor = getBgColor(type);
  return (
    <div className={styles.alert} style={{ backgroundColor: bgcolor }}>
      <span>
        <p>{type}</p> :<p>{message}</p>
      </span>
      {!autoClose && (
        <Button
          title="Close"
          onClick={() => {
            onClose(id);
          }}
        >
          close
        </Button>
      )}
    </div>
  );
};

export default Alert;
