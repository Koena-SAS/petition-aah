import DateCounter from "./date_counter";
import SignaturesCounter from "./signatures_counter";
import PropTypes from "prop-types";
import styles from "../../styles/counter_elements/counter_banner.module.scss";

/**
 * Displays counters information in the banner format.
 */
export default function CounterBanner({ color }) {
  let countersColor;
  switch (color) {
    case "dark":
      countersColor = styles.dark;
      break;
    case "light":
      countersColor = styles.light;
      break;
    case "customDark":
      countersColor = styles.customDark;
      break;
    default:
      countersColor = styles.dark;
  }

  return (
    <a
      href="https://petitions.senat.fr/initiatives/i-416"
      target="_blank"
      rel="noreferrer"
      className={`${styles.counters} ${countersColor}`}
    >
      J-
      <DateCounter format="banner" /> pour obtenir{" "}
      <SignaturesCounter format="banner" /> signatures : je signe !
    </a>
  );
}

CounterBanner.propTypes = {
  /**
   * The color of the date counter.
   */
  color: PropTypes.oneOf(["dark", "light", "customDark"]),
};

CounterBanner.defaultProps = {
  color: "dark",
};
