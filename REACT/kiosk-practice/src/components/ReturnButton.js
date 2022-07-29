import React from "react";
import { useStyles } from "../styles";

export default function ReturnButton() {
  const styles = useStyles();
  return (
    <img
      src="/images/returnbutton.png"
      alt="Main icon"
      className={styles.MainButton}
    ></img>
  );
}
