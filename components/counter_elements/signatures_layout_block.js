import styles from "../../styles/counter_elements/signatures_counter.module.scss";
import PropTypes from "prop-types";

/**
 * Displays signatures counter information in the block format.
 */
export default function SignaturesLayoutBlock({ count }) {
  return (
    <p className={styles.counter__container}>
      <span className={styles.counter__text}>Nombre total de signatures :</span>
      <span className={styles.counter__value}>{count.toLocaleString()}</span>
      <br /> /100 000
    </p>
  );
}

SignaturesLayoutBlock.propTypes = {
  /**
   * The number of total signatures already collected.
   */
  count: PropTypes.number.isRequired,
};
