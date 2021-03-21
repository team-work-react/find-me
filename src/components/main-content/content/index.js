import React from "react";
import InputPost from "./InputPost";
import Posts from "./Posts";
import styles from "./style.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <InputPost />
      <Posts />
    </div>
  );
}

export default Content;
