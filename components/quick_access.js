import styles from "../styles/quick_access.module.scss";
import PropTypes from "prop-types";

/**
 * Quick access for people using screen reader.
 */
export default function QuickAccess({ onClickFocus }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClickFocus();
  };
  return (
    <div role="region" aria-label="Accès rapide" className={styles.quickAccess}>
      <ul className={styles.quickAccess__list}>
        <li>
          <a
            href="#counter"
            className={`visually-hidden ${styles.quickAccess__a}`}
            onClick={handleClick}
          >
            Aller au compteur
          </a>
        </li>
        <li>
          <a
            href="#content"
            className={`visually-hidden ${styles.quickAccess__a}`}
          >
            Aller à l'explication
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={`visually-hidden ${styles.quickAccess__a}`}
          >
            Aller au pied de page
          </a>
        </li>
      </ul>
    </div>
  );
}

QuickAccess.propTypes = {
  /**
   * Function executed on counter link click, instead of the default link behavior.
   */
  onClickFocus: PropTypes.func.isRequired,
};
