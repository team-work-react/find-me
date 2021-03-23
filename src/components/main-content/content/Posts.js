import React, { useState } from "react";
import styles from "./style.module.css";

function Posts({ text }) {
  return <div className={styles.posts}>{text}</div>;
}

export default Posts;
