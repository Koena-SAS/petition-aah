import { useEffect, useState } from "react";
import styles from "../styles/Counter.module.scss";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Counter for the AAH senate 416 initiative.
 *
 * Fetches and displays the number of people
 * supporting the initiative, updating regularly.
 */
export default function Counter({ value }) {
  const [countValue, setCountValue] = useState(value);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function updateInitiative() {
      while (true) {
        axios
          .get(`https://petitions.senat.fr/initiatives/i-416`)
          .then((response) => {
            const parser = new DOMParser();
            const data = parser.parseFromString(response.data, "text/html");
            const fetchedValue = data.querySelector(
              "#initiative-416-votes-count span.progress__bar__number"
            ).textContent;
            setCountValue(fetchedValue);
          })
          .catch(() => {});
        await delay(3000);
        console.log("fetch done");
      }
    }
    updateInitiative();
  }, []);

  return <div className={styles.counter}>{countValue}</div>;
}

Counter.propTypes = {
  /**
   * Used to set initial value before the first fetch
   * if not given, 0 will be used
   */
  value: PropTypes.number,
};

Counter.defaultProps = {
  value: 0,
};
