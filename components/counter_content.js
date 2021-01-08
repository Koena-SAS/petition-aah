import { useState } from "react";
import SignaturesCounter from "./signatures_counter";
import DateCounter from "./date_counter";
import IntegrationDialog from "./integration_dialog";
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
      <DateCounter />
      <SignaturesCounter />
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
