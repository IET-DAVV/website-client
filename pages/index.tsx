import type { NextPage } from 'next';
import Head from 'next/head';
import { Announcement, IconHeader, TopBar } from '../components';
import styles from './Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>IET DAVV</title>
      <meta name="description" content="IET DAVV Website Client" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <header></header> */}

    <header className={styles.main}>
      <TopBar />
      <IconHeader />
      <Announcement />
    </header>
  </div>
);

export default Home;
