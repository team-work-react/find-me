import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.css";
import Avatar from "./Avatar";

function HeaderOption({ avatar, icon, title }) {
  return (
    <div className={styles.headerOptions}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.headerIcons} />}
      {avatar && <Avatar src={avatar} className={styles.headerIcons} />}
      <span>{title}</span>
    </div>
  );
}

export default HeaderOption;
