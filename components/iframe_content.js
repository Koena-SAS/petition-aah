import CounterBanner from "./counter_elements/counter_banner";
import CounterBlock from "./counter_elements/counter_block";
import styles from "../styles/iframe_content.module.scss";
import PropTypes from "prop-types";

export default function IframeContent({ format, color }) {
  return (
    <div className={styles.container}>
      {format === "block" ? <CounterBlock /> : <CounterBanner color={color} />}
    </div>
  );
}

IframeContent.propTypes = {
  /**
   * The display format of the date counter.
   */
  format: PropTypes.oneOf(["block", "banner"]).isRequired,
  /**
   * The color of the date counter.
   */
  color: PropTypes.oneOf(["dark", "light"]),
};
