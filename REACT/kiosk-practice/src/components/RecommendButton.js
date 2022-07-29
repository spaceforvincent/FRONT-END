import React from "react";
import { useStyles } from "../styles";

export default function RecommendButton() {
  const styles = useStyles();
  return (
    <img
      src="/images/recommendbutton.png"
      alt="Main icon"
      className={styles.MainButton}
    ></img>
  );
}
