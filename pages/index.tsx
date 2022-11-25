import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";
import AlertContextProvider, {
  AlertContext,
} from "../utils/contexts/AlertContext";
import { useContext } from "react";
const Home: NextPage = () => {
  const ctx = useContext(AlertContext);
  const useMessage: any = ctx.Message();
  return (
    <div className={styles.container}>
      <Head>
        <title>IET DAVV</title>
        <meta name="description" content="IET DAVV Website Client" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>IET DAVV Website Frontend</h1>
      </main>
    </div>
  );
};

export default Home;
