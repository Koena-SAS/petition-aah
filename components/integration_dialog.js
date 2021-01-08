import PropTypes from "prop-types";
import { useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import IframeContent from "./iframe_content";
import Button from "@material-ui/core/Button";
import styles from "../styles/integration_dialog.module.scss";

/**
 * Modal for iframe integration content.
 */
export default function IntegrationDialog({ onClose, open }) {
  const iframeCommand =
    '<iframe src="http://localhost:3000/iframe" title="Signez pour l\'indépendance des personnes handicapées"></iframe>';
  const textArea = useRef();
  const handleCopy = () => {
    textArea.current.select();
    document.execCommand("copy");
  };
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{
        "aria-modal": "true",
        "aria-label": `Intégrer l'iframe sur votre site`,
      }}
      maxWidth="lg"
    >
      <div className={styles.container}>
        <IframeContent />
        <div className={styles.container__integration}>
          <p className={styles.container__text}>
            Intégrer les compteurs sur votre site
          </p>
          <textarea
            value={iframeCommand}
            ref={textArea}
            className={styles.container__code}
          ></textarea>
          <div className={styles.container__buttons}>
            <Button onClick={handleCopy}>Copier</Button>
            <Button onClick={onClose}>Fermer</Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

IntegrationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
