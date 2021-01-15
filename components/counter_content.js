import { useState } from "react";
import IntegrationDialog from "./integration_dialog";
import CounterBanner from "./counter_elements/counter_banner";
import CounterBlock from "./counter_elements/counter_block";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import PropTypes from "prop-types";

/**
 * Date and signatures counter, with integration functionnality.
 */
export default function CounterContent({ format }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <IntegrationDialog open={open} onClose={handleClose} />
      {format === "block" ? <CounterBlock /> : <CounterBanner />}
      <Button
        variant="contained"
        size="small"
        onClick={handleClickOpen}
        startIcon={<CodeIcon />}
        style={{ backgroundColor: "#eee" }}
      >
        Intégrer
      </Button>
    </>
  );
}

CounterContent.propTypes = {
  /**
   * The display format of the date counter.
   */
  format: PropTypes.oneOf(["block", "banner"]),
};
