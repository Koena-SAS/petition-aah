import styles from "../styles/text_content.module.scss";

/**
 * Textual and media content, explaining the goal of the petition.
 */
export default function TextContent() {
  return (
    <div className={styles.content}>
      <h3 className={styles.content__title}>De quoi s'agit-il ?</h3>
      <p className={styles.content__description}>
        Une pétition citoyenne déposée sur le site du Sénat propose la
        désolidarisation des revenus du conjoint pour le paiement de
        l'Allocation aux Adultes Handicapés (AAH). Si cette pétition atteint 100
        000 signatures avant le <strong>10 mars 2020</strong>, le Sénat devra
        examiner la question, ce qui pourrait donner lieu à une proposition de
        loi.
      </p>

      <h3 className={styles.content__title}>Comment signer ?</h3>
      <p className={styles.content__description}>
        La signature est une procédure officielle se passant sur le site du
        Sénat. Pour pouvoir signer il faut utiliser France Connect qui offre
        plusieurs moyens de s'authentifier, par exemple avec son compte
        d'assurance maladie ou des impôts, ou encore son numéro de téléphone
        pour les abonnés Orange.{" "}
      </p>
    </div>
  );
}
