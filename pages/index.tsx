import type { NextPage } from 'next';

import Head from 'next/head';

import Achievements from '../components/Achievements';

import styles from './Home.module.scss';
import  Hero from '../components/herosection/Herosection'

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
      <Hero />
      
      
    </main>
<<<<<<< HEAD
    
=======
    <Achievements sampleProp="" />
>>>>>>> 185ff58677019d3dd045a168b702f3d7970ee62f
  </div>
);

export default Home;
