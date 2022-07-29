import React from "react";
import { useStyles } from "../styles";

export default function Mainicon() {
  const styles = useStyles();
  return (
    <img
      src="/images/mainicon.png"
      alt="Main icon"
      className={styles.largeLogo}
    ></img>
  );
}
