import Head from "next/head";
import styles from "../styles/home.module.scss";
import SignaturesCounter from "../components/signatures_counter";
import DateCounter from "../components/date_counter";
import Corner from "../components/corner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH)
        </title>
      </Head>

      <div role="region" aria-label="Accès rapide" className="visually-hidden">
        <ul>
          <li>
            <a href="#header">Aller à l'en-tête</a>
          </li>
          <li>
            <a href="#content">Aller au contenu textuel</a>
          </li>
          <li>
            <a href="#counter">Aller au compteur de signature</a>
          </li>
          <li>
            <a href="#footer">Aller au pied de page</a>
          </li>
        </ul>
      </div>

      <header role="banner" className={styles.header} id="header">
        <Corner />
        <h1 className={styles.title}>Signez pour notre autonomie</h1>
        <h2 className={styles.subtitle}>
          Pour que les personnes handicapées puissent vivre en couple sans être
          dépendantes de leur conjoint(e)
        </h2>
      </header>

      <main role="main" className={styles.main} id="main">
        <section className={styles.counter} id="counter">
          <DateCounter />
          <SignaturesCounter />
        </section>

        <section className={styles.content} id="content">
          <h3 className={styles.content__title}>De quoi s'agit-il ?</h3>
          <p className={styles.description}>
            Une pétition citoyenne déposée sur le site du Sénat propose la
            désolidarisation des revenus du conjoint pour le paiement de
            l'Allocation aux Adultes Handicapés (AAH). Si cette pétition atteint
            100 000 signatures dans les 6 mois, le Sénat devra examiner la
            question, ce qui pourrait donner lieu à une proposition de loi.
          </p>

          <h3 className={styles.content__title}>Comment signer ?</h3>
          <p>
            La signature est une procédure officielle se passant sur le site du
            Sénat. Pour pouvoir signer il faut utiliser France Connect qui offre
            plusieurs moyens de s'authentifier, par exemple avec son compte
            d'assurance maladie ou des impôts, ou encore son numéro de téléphone
            pour les abonnés Orange.{" "}
          </p>
        </section>
      </main>

      <footer role="contentinfo" className={styles.footer} id="footer"></footer>
    </div>
  );
}
