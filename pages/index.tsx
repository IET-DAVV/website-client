import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './Home.module.scss';
import { Button, IconButton, Loader } from '../components';
import Image from 'next/image';
import BubbleImage from '../assets/images/bubbble.png';

const Home: NextPage = () => {
  console.log('ksjdf');
  return (
    <div className={styles.container}>
      <Head>
        <title>IET DAVV</title>
        <meta name="description" content="IET DAVV Website Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>IET DAVV Website</h1>
      </main>
    </div>
  );
};

export default Home;
