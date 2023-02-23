import type { NextPage } from 'next';
import Head from 'next/head';
import { Announcement, IconHeader, TopBar } from '../components';
import {Recruiters} from '../components';
import  from '../components/Achievements';
import styles from './Home.module.scss';
import  Hero from '../components/herosection/Herosection'

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
      <h1>IET DAVV Website</h1>
      <h2 className="hello">hello</h2>
      <Hero />
    </main>
    <Recruiters variant="var1" />
    <Achievements sampleProp="" />
  </div>
);

export default Home;
