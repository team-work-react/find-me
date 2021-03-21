import React from "react";
import styles from "./style.module.css";
import SideBarLeft from "./sidebar-left/index";
import Content from "./content/index";
import SideBarRight from "./sidebar-right/index";

function AppBody() {
  return (
    <div className={styles.mainContent}>
      <SideBarLeft />
      <Content />
      <SideBarRight />
    </div>
  );
}

export default AppBody;
