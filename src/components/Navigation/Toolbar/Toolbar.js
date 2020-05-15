import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Layout/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
