import AlertContextProvider from "../utils/contexts/AlertContext";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertContextProvider>
      <Component {...pageProps} />
    </AlertContextProvider>
  );
}

export default MyApp;
