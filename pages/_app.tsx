import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import AlertContextProvider from '../utils/contexts/AlertContext';

// eslint-disable-next-line react/function-component-definition
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AlertContextProvider>
      <Component {...pageProps} />
    </AlertContextProvider>
  );
};

export default MyApp;
