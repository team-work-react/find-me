import React from "react";
import styles from "./style.module.css";
import HeaderOption from "./HeaderOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div>
      <HeaderOption title="Home" icon={faSearch} />
    </div>
  );
}

export default Navigation;
