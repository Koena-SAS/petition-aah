import { useState } from "react";
import IntegrationDialog from "./integration_dialog";
import CounterBanner from "./counter_elements/counter_banner";
import styles from "../styles/counter_content.module.scss";

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
      <CounterBanner color="customDark" />
      <button onClick={handleClickOpen} className={styles.integration}>
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={styles.integration__svg}
        >
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            fill="#f9d5cc"
          ></path>
        </svg>
        <span className={styles.integration__text}>Intégrer</span>
      </button>
    </>
  );
}
