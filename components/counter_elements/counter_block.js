import DateCounter from "./date_counter";
import SignaturesCounter from "./signatures_counter";
import Button from "@material-ui/core/Button";

/**
 * Displays counters information in the block format.
 */
export default function CounterBlock() {
  return (
    <>
      <DateCounter format="block" />
      <SignaturesCounter format="block" />
      <Button
        variant="contained"
        href="https://petitions.senat.fr/initiatives/i-416"
        style={{
          textTransform: "none",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        Signez la pétition sur le site du Sénat
      </Button>
    </>
  );
}
