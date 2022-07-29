import React from "react";
import { useStyles } from "../styles";

export default function SearchButton() {
  const styles = useStyles();
  return (
    <img
      src="/images/searchbutton.png"
      alt="Main icon"
      className={styles.MainButton}
    ></img>
  );
}
