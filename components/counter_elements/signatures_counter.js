import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import SignaturesLayoutBlock from "./signatures_layout_block";
import { fetchInitiative, MAX_SIGNATURES } from "./counter_utils";

/**
 * Counter for the signatures of the AAH senate 416 initiative.
 *
 * Fetches and displays the number of people supporting the initiative,
 * updating regularly.
 * Updates are configurable with constants in this file. They are done less
 * and less quickly until a limit value.
 */
export default function Counter({
  value,
  initialTimeToWait,
  growingFactor,
  growingLimit,
  maxTotalRequests,
  countAnimationFrames,
  countAnimationDelay,
  format,
  countReverse,
}) {
  const getInitialValue = () => {
    if (value !== null) {
      return value;
    } else {
      if (format === "block" || (format === "banner" && !countReverse)) {
        return 0;
      } else {
        return MAX_SIGNATURES;
      }
    }
  };

  const [countValue, setCountValue] = useState(getInitialValue());
  const [delay, setDelay] = useState(initialTimeToWait);
  const waitTimeGenerator = useRef(
    generateNextWaitTime(initialTimeToWait, growingFactor, growingLimit)
  );
  const totalRequests = useRef(0);

  useEffect(() => {
    // This variable is needed to avoid memory leak if component is unmounted
    // while animation is not finished
    let isMounted = true;
    async function updateInitiative() {
      const fetchedValue = await fetchInitiative();
      if (format === "block" || (format === "banner" && !countReverse)) {
        await countUpValueProgressively(fetchedValue);
      } else {
        await countDownValueProgressively(MAX_SIGNATURES - fetchedValue);
      }
      await waitDelay(delay);
      totalRequests.current += 1;
      if (totalRequests.current < maxTotalRequests) {
        setDelay(waitTimeGenerator.current.next().value);
      }
    }

    async function countUpValueProgressively(targetValue) {
      if (!countAnimationFrames) {
        setCountValue(targetValue);
      } else {
        let increment =
          Math.abs(Math.abs(targetValue - countValue) - 0.1) /
          countAnimationFrames;
        let i = countValue;
        const interval = setInterval(() => {
          if (i > targetValue || !isMounted) {
            clearInterval(interval);
          } else {
            setCountValue(Math.ceil(i));
          }
          i += increment;
        }, countAnimationDelay);
      }
    }

    async function countDownValueProgressively(targetValue) {
      if (targetValue < countValue) {
        if (!countAnimationFrames) {
          setCountValue(targetValue);
        } else {
          let decrement =
            Math.abs(Math.abs(targetValue - countValue) - 0.1) /
            countAnimationFrames;
          let i = countValue;
          const interval = setInterval(() => {
            if (i < targetValue || !isMounted) {
              clearInterval(interval);
            } else {
              setCountValue(Math.floor(i));
            }
            i -= decrement;
          }, countAnimationDelay);
        }
      }
    }

    if (totalRequests.current < maxTotalRequests) {
      updateInitiative();
    }

    return () => {
      isMounted = false;
    };
  }, [delay]); // eslint-disable-line react-hooks/exhaustive-deps

  return format === "block" ? (
    <SignaturesLayoutBlock count={countValue} />
  ) : (
    countValue.toLocaleString()
  );
}

Counter.propTypes = {
  /**
   * Used to set initial value before the first fetch.
   */
  value: PropTypes.number,
  /**
   * The initial time to wait before the next fetch of the counter value
   * (in miliseconds)
   */
  initialTimeToWait: PropTypes.number,
  /**
   * The factor multiplying the initial time after each fetch.
   */
  growingFactor: PropTypes.number,
  /**
   * The time value above which the time to wait between two fetches will
   * no more grow (in miliseconds)
   */
  growingLimit: PropTypes.number,
  /**
   * This is for security, 150 is enouth with the other values to have requests
   * until the end of the petition
   */
  maxTotalRequests: PropTypes.number,
  /**
   * The maximum number of of updates that will be used to animate the counter.
   */
  countAnimationFrames: PropTypes.number,
  /**
   * The time to wait between each updates that will be used to animate the counter.
   */
  countAnimationDelay: PropTypes.number,
  /**
   * The display format of the date counter.
   */
  format: PropTypes.oneOf(["block", "banner"]).isRequired,
  /**
   * Wether the counter should count down instead of counting up, or not.
   * The value is currently only used for banner format.
   */
  countReverse: PropTypes.bool,
};

Counter.defaultProps = {
  value: null,
  initialTimeToWait: 3000,
  growingFactor: 1.2,
  growingLimit: 86400000,
  maxTotalRequests: 150,
  countAnimationFrames: 20,
  countAnimationDelay: 30,
  countReverse: true,
};

async function waitDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export function* generateNextWaitTime(
  initialTimeToWait,
  growingFactor,
  growingLimit
) {
  let time = initialTimeToWait;
  while (true) {
    const nextTime = time * growingFactor;
    time = nextTime < growingLimit ? nextTime : growingLimit;
    yield time;
  }
}
