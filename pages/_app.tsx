import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../components/herosection/Herosection'
// eslint-disable-next-line react/function-component-definition
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
