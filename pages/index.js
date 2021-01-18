import Head from "next/head";
import styles from "../styles/home.module.scss";
import Corner from "../components/corner";
import QuickAccess from "../components/quick_access";
import TextContent from "../components/text_content";
import CounterContent from "../components/counter_content";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </title>
      </Head>

      <QuickAccess />

      <header role="banner" className={styles.header} id="header">
        <Corner />
        <h1 className={styles.title}>Signez pour notre autonomie</h1>
      </header>

      <main role="main" className={styles.main} id="main">
        <section className={styles.counter} id="counter">
          <CounterContent />
        </section>
        <section className={styles.content} id="content">
          <h2 className={styles.subtitle}>
            Pour que les personnes handicapées puissent vivre en couple sans
            être dépendantes de leur conjoint(e)
          </h2>
          <TextContent />
        </section>
      </main>

      <footer role="contentinfo" className={styles.footer} id="footer">
        <a href="https://koena.net">Fait par Koena</a>
      </footer>
    </div>
  );
}
