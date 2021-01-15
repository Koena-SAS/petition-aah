import styles from "../../styles/date_counter.module.scss";
import PropTypes from "prop-types";

/**
 * Displays date counter information in the block format.
 */
export default function DateLayoutBlock({ remainingTime }) {
  return (
    <div className={styles.counter__container}>
      <span className={styles.counter__text}>Temps restant pour signer :</span>
      <div className={styles.counter__units}>
        <div className={styles.counter__unit}>
          <span className={styles.counter__value}>{remainingTime.days}</span>{" "}
          jours
        </div>
        <div className={styles.counter__unit}>
          <span className={styles.counter__value}>{remainingTime.hours}</span>{" "}
          heures
        </div>
        <div className={styles.counter__unit}>
          <span className={styles.counter__value}>{remainingTime.minutes}</span>{" "}
          minutes
        </div>
      </div>
    </div>
  );
}

DateLayoutBlock.propTypes = {
  /**
   * Remaining time before the end of the petition.
   */
  remainingTime: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
  }).isRequired,
};
