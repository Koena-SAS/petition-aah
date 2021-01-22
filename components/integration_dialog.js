import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import IframeContent from "./iframe_content";
import styles from "../styles/integration_dialog.module.scss";
import IntegrationOptions from "./integration_options";

/**
 * Modal for iframe integration content.
 */
export default function IntegrationDialog({
  onClose,
  open,
  signaturesReached,
}) {
  const [format, setFormat] = useState("banner");
  const [color, setColor] = useState("dark");
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    if (open) {
      setFocus(true);
    }
  }, [open]);

  useEffect(() => {
    if (focus) {
      setFocus(false);
    }
  }, [focus]);

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="integration-dialog-label"
      open={open}
      PaperProps={{
        "aria-modal": "true",
      }}
      maxWidth="lg"
    >
      <div className={styles.container}>
        <div className={styles.container__iframeContent}>
          <IframeContent
            format={format}
            color={color}
            focus={focus}
            signaturesReached={signaturesReached}
          />
        </div>
        <IntegrationOptions
          format={format}
          color={color}
          setColor={setColor}
          setFormat={setFormat}
          onClose={onClose}
          styles={styles}
        />
      </div>
    </Dialog>
  );
}

IntegrationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  /**
   * Wether the target signatures amount have been reached or not.
   */
  signaturesReached: PropTypes.bool.isRequired,
};
