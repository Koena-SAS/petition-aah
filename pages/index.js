import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Counter from "../components/counter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Signez pour notre autonomie</h1>

        <h2 className={styles.subtitle}>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </h2>

        <Counter styles={styles} />

        <p className={styles.description}>
          #DésolidarisonsAAH #SignezPourNotreAutonomie
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
