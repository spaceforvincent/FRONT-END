import React from "react";
import { useStyles } from "../styles";

export default function LendButton() {
  const styles = useStyles();
  return (
    <img
      src="/images/lendbutton.png"
      alt="Main icon"
      className={styles.MainButton}
    ></img>
  );
}
