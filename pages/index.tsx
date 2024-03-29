import type { NextPage } from 'next';
import Head from 'next/head';
import { Announcement, IconHeader, Recruiters, TopBar } from '../components';
import Achievements from '../components/Achievements';
import Hero from '../components/herosection/Herosection';
import styles from './Home.module.scss';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>IET DAVV</title>
      <meta name="description" content="IET DAVV Website Client" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.main}>
      <TopBar />
      <IconHeader />
      <Announcement />
    </header>

    <main className={styles.main}>
      <Hero />
    </main>
    <Recruiters variant="var1" />
    <Achievements sampleProp="" />
  </div>
);

export default Home;
