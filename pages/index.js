import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Corner from "../components/corner";
import QuickAccess from "../components/quick_access";
import TextContent from "../components/text_content";
import CounterContent from "../components/counter_content";

export default function Home() {
  const [counterFocused, setCounterFocused] = useState(false);
  useEffect(() => {
    if (counterFocused) {
      setCounterFocused(false);
    }
  }, [counterFocused]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Signez pour notre autonomie : compteur de signatures</title>
      </Head>

      <QuickAccess onClickFocus={() => setCounterFocused(true)} />

      <header role="banner" className={styles.header}>
        <Corner />
        <h1 className={styles.title}>Signez pour notre autonomie</h1>
      </header>

      <main role="main" className={styles.main} id="main">
        <section className={styles.counter} id="counter">
          <CounterContent focus={counterFocused} />
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
        {" "}
        <p>
          Fait par <a href="https://koena.net">Koena</a>{" "}
          <span className={styles.footer__separation}>|</span> page sous{" "}
          <a href="https://github.com/Koena-SAS/petition-aah/blob/main/LICENSE">
            Licence AGPL
          </a>
        </p>
        <p className={styles.footer__rgaa}>
          97% conforme RGAA 4 (testé par Koena le 21/01/2021). Si vous
          rencontrez des difficultés d'accès, n'hésitez pas,{" "}
          <a href="https://koena.net/mode-demploi-et-accessibilite-du-site-koena/#contact">
            contactez-nous pour que nous puissions vous aider !
          </a>
        </p>
      </footer>
    </div>
  );
}
