import React from "react";
import styles from "./style.module.css";
import HeaderOption from "./HeaderOption";
import avatar from "./../../assets/images/avatar.png";
import {
  faHome,
  faUserFriends,
  faSuitcase,
  faCommentDots,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <HeaderOption title="Home" icon={faHome} />
      <HeaderOption title="Network" icon={faUserFriends} />
      <HeaderOption title="Jobs" icon={faSuitcase} />
      <HeaderOption title="Messaging" icon={faCommentDots} />
      <HeaderOption title="Notifications" icon={faBell} />
      <HeaderOption title="Me" avatar={avatar} />
    </div>
  );
}

export default Navigation;
