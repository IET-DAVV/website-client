import "../styles/globals.css";
// import {useState} from 'react'
import type { AppProps } from "next/app";
// import { Loader } from '../components'
// import Loader from './../components/Loader/index';

function MyApp({ Component, pageProps }: AppProps) {
	// const [loading, setLoading] = useState(false);
	// Router.events.on('routeChangeStart', (url) => {
	//     <Loader/>
	//     setLoading(true);
	// });
	// Router.events.on('routeChangeComplete', (url) => {
	//     setLoading(false);
	// });
	// return {loading? <Loader/> : <Component {...pageProps} />}
	return <Component {...pageProps} />;
}

export default MyApp;
