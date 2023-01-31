import type { NextPage } from 'next';
import Head from 'next/head';
import Recruiters from '../components';
import styles from './Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>IET DAVV</title>
      <meta name="description" content="IET DAVV Website Client" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1>IET DAVV Website</h1>
      <h2 className="hello">hello</h2>
    </main>
    <Recruiters />
  </div>
);

export default Home;
