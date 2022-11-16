import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlify proxy test</title>
        <meta name="description" content="Netlify proxy test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Netlify proxy test</h1>
      </main>
    </div>
  );
}
