import PropTypes from "prop-types";
import { useRef } from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";

/**
 * Options for iframe integration.
 *
 * This component is coupled with IntegrationDialog. Styles and tests are shared.
 */
export default function IntegrationOptions({
  onClose,
  color,
  format,
  setColor,
  setFormat,
  styles,
}) {
  const getIframeCommand = () => {
    const title = '"Signez pour l\'indépendance des personnes handicapées"';
    if (format === "block") {
      return `<iframe src="${window.location.href}iframe/block/" title=${title} style="border: 0; width: 335px; height: 387px;"></iframe>`;
    } else if (format === "banner") {
      const css = `<style>
  .petition-counters {
    border: 0;
    width: 100%;
    height: 56px;
  }
  @media (max-width: 676px) {
    .petition-counters {
      height: 88px;
    }
  }
  @media (max-width: 343px) {
    .petition-counters {
      height: 108px;
    }
  }
</style>`;
      if (color === "light") {
        return `<iframe src="${window.location.href}iframe/banner/light/" title=${title} class="petition-counters"></iframe>
${css}`;
      } else {
        return `<iframe src="${window.location.href}iframe/banner/dark/" title=${title} class="petition-counters"></iframe>
${css}`;
      }
    }
  };

  const iframeCommand = process.browser ? getIframeCommand() : "";
  const textArea = useRef();

  const handleCopy = () => {
    textArea.current.select();
    document.execCommand("copy");
  };

  return (
    <div className={styles.container__integration}>
      <h2 className={styles.container__text} id="integration-dialog-label">
        Intégrer les compteurs sur votre site
      </h2>
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
        <div role="radiogroup" aria-label="Couleurs" className={styles.colors}>
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
      <label className={styles.container__textAreaLabel} htmlFor="iframe-code">
        Code à copier et à intégrer sur votre site :
      </label>
      <textarea
        value={iframeCommand}
        id="iframe-code"
        readOnly
        ref={textArea}
        className={styles.container__code}
      ></textarea>
      <div className={styles.container__buttons}>
        <Button onClick={handleCopy}>Copier</Button>
        <Button onClick={onClose}>Fermer</Button>
      </div>
    </div>
  );
}

IntegrationOptions.propTypes = {
  onClose: PropTypes.func.isRequired,
  color: PropTypes.string,
  format: PropTypes.string.isRequired,
  setColor: PropTypes.func,
  setFormat: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};
