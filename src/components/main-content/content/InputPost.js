import React, { useState } from "react";
import styles from "./style.module.css";
import avatar from "./../../../assets/images/avatar.png";
import Posts from "./Posts";

function InputPost() {
  const [inputValue, setInputValue] = useState("");
  const [post, setPost] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addPost = () => {
    setPost(true);
  };
  return (
    <>
      <div className={styles.inputPost}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.createPost}>
          <input
            type="text"
            placeholder="Start a post"
            onChange={handleChange}
          />
          <button className={styles.addPost} onClick={addPost}>
            POST
          </button>
        </div>
      </div>

      {post && <Posts text={inputValue} />}
    </>
  );
}

export default InputPost;
