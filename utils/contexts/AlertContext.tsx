import React, { createContext, useMemo, useState } from 'react';
import Alert from '../../components/Alert';
/*global NodeJS */

interface IAlertContext {
  Message: () => {
    success: (
      message: string,
      autoClose?: boolean,
      duration?: number
    ) => NodeJS.Timeout | undefined;
    error: (
      message: string,
      autoClose?: boolean,
      duration?: number
    ) => NodeJS.Timeout | undefined;
    warning: (
      message: string,
      autoClose?: boolean,
      duration?: number
    ) => NodeJS.Timeout | undefined;
  };
}

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

interface AlertContextProviderProps {
  children: React.ReactNode;
}
interface IAlert {
  id: string;
  message: string;
  autoClose: boolean;
  type: 'warning' | 'error' | 'success';
}

const AlertContextProvider: React.FC<AlertContextProviderProps> = ({
  children,
}) => {
  const [Alerts, setAlerts] = useState<Array<IAlert>>([]);

  const Message = useMemo(() => {
    return () => {
      const id = (Math.random() * 100 + 100).toLocaleString();
      const res = {
        success: (
          message: string,
          autoClose: boolean = true,
          duration: number = 1000
        ) => {
          setAlerts((state) => [
            ...state,
            {
              message,
              autoClose,
              type: 'success',
              id,
            },
          ]);
          if (autoClose) {
            return setTimeout(() => {
              setAlerts((state) => state.filter((value) => value.id !== id));
            }, duration);
          }
          return undefined;
        },
        error: (
          message: string,
          autoClose: boolean = true,
          duration: number = 1000
        ) => {
          setAlerts((state) => [
            ...state,
            {
              message,
              autoClose,
              type: 'error',
              id,
            },
          ]);
          if (autoClose) {
            return setTimeout(() => {
              setAlerts((state) => state.filter((value) => value.id !== id));
            }, duration);
          }
          return undefined;
        },
        warning: (
          message: string,
          autoClose: boolean = true,
          duration: number = 1000
        ) => {
          setAlerts((state) => [
            ...state,
            {
              message,
              autoClose,
              type: 'warning',
              id,
            },
          ]);
          if (autoClose) {
            return setTimeout(() => {
              setAlerts((state) => state.filter((value) => value.id !== id));
            }, duration);
          }
          return undefined;
        },
      };
      return res;
    };
  }, []);
  function onClose(id: string) {
    return setAlerts((state) => state.filter((value) => value.id !== id));
  }
  return (
    <AlertContext.Provider value={{ Message }}>
      <div style={{ position: 'absolute', left: '20%' }}>
        {Alerts?.length !== 0 &&
          Alerts.map((alert) => (
            <Alert
              key={alert.id}
              type={alert.type}
              message={alert.message}
              autoClose={alert.autoClose}
              id={alert.id}
              onClose={onClose}
            />
          ))}
      </div>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContextProvider;
