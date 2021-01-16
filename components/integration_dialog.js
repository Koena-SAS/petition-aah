import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import IframeContent from "./iframe_content";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import styles from "../styles/integration_dialog.module.scss";

/**
 * Modal for iframe integration content.
 */
export default function IntegrationDialog({ onClose, open }) {
  const [format, setFormat] = useState("banner");
  const [color, setColor] = useState("dark");
  const iframeCommand = process.browser
    ? `<iframe src="${window.location.href}iframe/" title="Signez pour l'indépendance des personnes handicapées"></iframe>`
    : "";
  const textArea = useRef();

  const handleCopy = () => {
    textArea.current.select();
    document.execCommand("copy");
  };

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
        <IframeContent format={format} color={color} />
        <div className={styles.container__integration}>
          <p className={styles.container__text} id="integration-dialog-label">
            Intégrer les compteurs sur votre site
          </p>
          <div role="radiogroup" aria-label="Format" className={styles.formats}>
            <Radio
              name="format"
              id="banner-format"
              color="default"
              size="small"
              value="banner"
              onClick={() => setFormat("banner")}
              checked={format === "banner"}
              className={styles.formats__radio1}
            />
            <label htmlFor="banner-format" className={styles.formats__label1}>
              Bandeau
            </label>
            <Radio
              name="format"
              id="block-format"
              color="default"
              size="small"
              value="block"
              onClick={() => setFormat("block")}
              checked={format === "block"}
              className={styles.formats__radio2}
            />
            <label htmlFor="block-format" className={styles.formats__label2}>
              Bloc
            </label>
          </div>
          {format === "banner" ? (
            <div
              role="radiogroup"
              aria-label="Couleurs"
              className={styles.colors}
            >
              <Radio
                name="color"
                id="color-dark"
                color="default"
                size="small"
                value="dark"
                onClick={() => setColor("dark")}
                checked={color === "dark"}
                className={styles.formats__radio1}
              />
              <label htmlFor="color-dark" className={styles.formats__label1}>
                Fond foncé
              </label>
              <Radio
                name="color"
                id="color-light"
                color="default"
                size="small"
                value="light"
                onClick={() => setColor("light")}
                checked={color === "light"}
                className={styles.formats__radio2}
              />
              <label htmlFor="color-light" className={styles.formats__label2}>
                Fond clair
              </label>
            </div>
          ) : (
            ""
          )}
          <textarea
            value={iframeCommand}
            readOnly
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
