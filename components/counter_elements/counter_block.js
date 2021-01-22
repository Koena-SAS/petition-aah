import { useEffect, useRef } from "react";
import DateCounter from "./date_counter";
import SignaturesCounter from "./signatures_counter";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

/**
 * Displays counters information in the block format.
 */
export default function CounterBlock({ focus }) {
  const linkRef = useRef();
  useEffect(() => {
    if (focus) {
      linkRef.current.focus();
    }
  }, [focus]);

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
        target="_blank"
        rel="noreferrer"
        ref={linkRef}
      >
        Signez la pétition sur le site du Sénat
      </Button>
    </>
  );
}

CounterBlock.propTypes = {
  /**
   * Wether the focus should be placed on the first focusable element
   * of this component at init or not. By default it's not the case.
   */
  focus: PropTypes.bool,
};

CounterBlock.defaultProps = {
  focus: false,
};
