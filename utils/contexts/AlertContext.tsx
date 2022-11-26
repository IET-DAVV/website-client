import React, { createContext, useState } from "react";
import Alert from "../../components/Alert";

interface IAlertContext {
  Message: any;
}

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

interface AlertContextProviderProps {
  children: React.ReactNode;
}
interface IAlert {
  id: string;
  message: string;
  autoClose: boolean;
  type: string;
}

const AlertContextProvider: React.FC<AlertContextProviderProps> = ({
  children,
}) => {
  const [Alerts, setAlerts] = useState<Array<IAlert>>([]);

  function Message() {
    let id = (Math.random() * 100 + 100).toLocaleString();
    let res = {
      success: function (
        message: string,
        autoClose: boolean = true,
        duration: number = 1000
      ) {
        console.log(message, autoClose, duration);
        setAlerts((state) => [
          ...state,
          {
            message,
            autoClose,
            type: "success",
            id,
          },
        ]);
        if (autoClose) {
          return setTimeout(() => {
            setAlerts((state) => state.filter((value) => value.id !== id));
          }, duration);
        }
      },
      error: function (
        message: string,
        autoClose: boolean = true,
        duration: number = 1000
      ) {
        console.log(message, autoClose, duration);
        setAlerts((state) => [
          ...state,
          {
            message,
            autoClose,
            type: "error",
            id,
          },
        ]);
        if (autoClose) {
          return setTimeout(() => {
            setAlerts((state) => state.filter((value) => value.id !== id));
          }, duration);
        }
      },
      warning: function (
        message: string,
        autoClose: boolean = true,
        duration: number = 1000
      ) {
        console.log(message, autoClose, duration);
        setAlerts((state) => [
          ...state,
          {
            message,
            autoClose,
            type: "warning",
            id,
          },
        ]);
        if (autoClose) {
          return setTimeout(() => {
            setAlerts((state) => state.filter((value) => value.id !== id));
          }, duration);
        }
      },
    };
    return res;
  }
  function onClose(id: string) {
    setAlerts((state) => state.filter((value) => value.id !== id));
  }
  return (
    <AlertContext.Provider value={{ Message: Message }}>
      <div style={{ position: "absolute", left: "20%" }}>
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
