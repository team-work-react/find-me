import React from "react";
import styles from "./style.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
