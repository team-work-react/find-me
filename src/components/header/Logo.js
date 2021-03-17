import React from "react";
import logo from "./../../assets/images/findMe.png";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <div className={styles.leftHeader}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.searchInput}>
        <input type="text" className={styles.search} placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
      </div>
    </div>
  );
}

export default Logo;
