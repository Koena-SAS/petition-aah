import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DateLayoutBlock from "./date_layout_block";

/**
 * Counter for the expiration of the AAH senate 416 initiative.
 *
 * Displays the remaining time before the expiration of the petition,
 * updating regularly.
 */
export default function DateCounter({
  expirationDate,
  updateInterval,
  format,
}) {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return format === "block" ? (
    <DateLayoutBlock remainingTime={remainingTime} />
  ) : (
    remainingTime.days
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
  /**
   * The display format of the date counter.
   */
  format: PropTypes.oneOf(["block", "banner"]).isRequired,
};

DateCounter.defaultProps = {
  expirationDate: new Date(2021, 2, 10, 23, 59, 59),
  updateInterval: 60,
};

export function dateDiff(initialDate, endDate) {
  if (endDate < initialDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
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
