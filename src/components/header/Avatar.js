import React from "react";
import styles from "./style.module.css";

function Avatar({ src }) {
  return (
    <div className={styles.avatar}>
      <img src={src} alt="avatar" />
    </div>
  );
}

export default Avatar;
