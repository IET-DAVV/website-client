import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.scss';
import { Button, IconButton, Loader, Modal } from '../components';
import Image from 'next/image';
import BubbleImage from '../assets/images/bubbble.png';

const Home: NextPage = () => {
  console.log('ksjdf');
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>IET DAVV</title>
        <meta name="description" content="IET DAVV Website Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>IET DAVV Website</h1>
        <Modal title="Info" onClose={() => setShow(false)} show={show}>
          <p>Welcome to the Website of IET-DAVV</p>
          <button onClick={() => setShow(true)}>Show</button>
        </Modal>
      </main>
    </div>
  );
};

export default Home;
