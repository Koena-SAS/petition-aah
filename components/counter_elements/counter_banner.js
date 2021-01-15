import DateCounter from "./date_counter";
import SignaturesCounter from "./signatures_counter";

/**
 * Displays counters information in the banner format.
 */
export default function CounterBanner() {
  return (
    <a href="https://petitions.senat.fr/initiatives/i-416">
      J-
      <DateCounter format="banner" /> pour obtenir{" "}
      <SignaturesCounter format="banner" /> signatures : je signe !
    </a>
  );
}
