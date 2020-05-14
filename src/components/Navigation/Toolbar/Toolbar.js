import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Layout/Logo/Logo";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <nav>...</nav>
  </header>
);

export default toolbar;
