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
          Pour que les personnes handicapées puissent vivre en couple sans être
          dépendantes de leur conjoint(e)
        </h2>

        <Counter styles={styles} />

        <h3>De quoi s'agit-il ?</h3>
        <p className={styles.description}>
          Une pétition citoyenne déposée sur le site du Sénat propose la
          désolidarisation des revenus du conjoint pour le paiement de
          l'Allocation aux Adultes Handicapés (AAH). Si cette pétition atteint
          100 000 signatures dans les 6 mois, le Sénat devra examiner la
          question, ce qui pourrait donner lieu à une proposition de loi.
        </p>

        <h3>Comment signer ?</h3>
        <p>
          La signature est une procédure officielle se passant sur le site du
          Sénat. Pour pouvoir signer il faut utiliser France Connect qui offre
          plusieurs moyens de s'authentifier, par exemple avec son compte
          d'assurance maladie ou des impôts, ou encore son numéro de téléphone
          pour les abonnés Orange.{" "}
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
