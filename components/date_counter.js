import { useEffect, useState } from "react";
import styles from "../styles/date_counter.module.scss";
import PropTypes from "prop-types";

/**
 * Counter for the expiration of the AAH senate 416 initiative.
 *
 * Displays the remaining time before the expiration of the petition,
 * updating regularly.
 */
export default function DateCounter({ expirationDate, updateInterval }) {
  const [remainingTime, setRemainingTime] = useState(
    dateDiff(new Date(), expirationDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now > expirationDate) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setRemainingTime(dateDiff(now, expirationDate));
      }
    }, updateInterval * 1000);
  });

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

DateCounter.propTypes = {
  /**
   * Expiration date of the AAH petition event.
   */
  expirationDate: PropTypes.instanceOf(Date),
  /**
   * The interval between two updates of the displayed date.
   */
  updateInterval: PropTypes.number,
};

DateCounter.defaultProps = {
  expirationDate: new Date(2021, 2, 10, 0, 0, 0),
  updateInterval: 60,
};

export function dateDiff(initialDate, endDate) {
  const diff = {};
  let tmp = endDate - initialDate;

  tmp = Math.floor(tmp / 1000);
  diff.seconds = tmp % 60;

  tmp = Math.floor((tmp - diff.seconds) / 60);
  diff.minutes = tmp % 60;

  tmp = Math.floor((tmp - diff.minutes) / 60);
  diff.hours = tmp % 24;

  tmp = Math.floor((tmp - diff.hours) / 24);
  diff.days = tmp;

  return diff;
}
