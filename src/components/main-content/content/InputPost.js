import React from "react";
import styles from "./style.module.css";
import avatar from "./../../../assets/images/avatar.png";

function InputPost() {
  return (
    <>
      <div className={styles.inputPost}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.createPost}>
          <input type="text" placeholder="Start a post" />
          <button className={styles.addPost}>POST</button>
        </div>
      </div>
    </>
  );
}

export default InputPost;
