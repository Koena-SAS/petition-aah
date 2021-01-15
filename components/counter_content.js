import { useState } from "react";
import IntegrationDialog from "./integration_dialog";
import CounterBanner from "./counter_elements/counter_banner";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";

/**
 * Date and signatures counter, with integration functionnality.
 */
export default function CounterContent() {
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
      <CounterBanner />
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
