import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function FromNext() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlify proxy test - from next</title>
        <meta name="description" content="Netlify proxy test - from next" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page is a route from the nextjs app
        </h1>
      </main>
    </div>
  );
}
