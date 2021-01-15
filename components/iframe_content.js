import CounterBanner from "./counter_elements/counter_banner";
import CounterBlock from "./counter_elements/counter_block";
import styles from "../styles/iframe_content.module.scss";
import PropTypes from "prop-types";

export default function IframeContent({ format }) {
  return (
    <div className={styles.container}>
      {format === "block" ? <CounterBlock /> : <CounterBanner />}
    </div>
  );
}

IframeContent.propTypes = {
  /**
   * The display format of the date counter.
   */
  format: PropTypes.oneOf(["block", "banner"]),
};
