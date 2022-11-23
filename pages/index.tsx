import type { NextPage } from "next";
import Head from "next/head";
import {Button} from "../components"
import styles from "./Home.module.scss";
import { Loader } from "../components";
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
			</main>
			<Button></Button>
			<Loader />
		</div>
	);
};

export default Home;
