import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HeaderOption({ icon, title }) {
  return (
    <div className={styles.headerOptions}>
      {title}
      {icon && <FontAwesomeIcon icon={icon} />}
    </div>
  );
}

export default HeaderOption;
