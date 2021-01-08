import DateCounter from "./date_counter";
import SignaturesCounter from "./signatures_counter";
import styles from "../styles/iframe_content.module.scss";
import Button from "@material-ui/core/Button";

export default function IframeContent() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
