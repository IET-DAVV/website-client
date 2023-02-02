import type { NextPage } from 'next';
import Head from 'next/head';
import EventSection from '../components/Landing Page/EventsSection/EventSection';
import styles from './Home.module.scss';

const Home: NextPage = () => {
  return (
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
      <EventSection />
    </div>
  );
};

export default Home;
