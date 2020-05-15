import React from "react";
import image from "../../assets/images/logo.png";
import styles from "./Logo.module.css";

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={image} alt="Burger" style={{ height: props.height }} />
  </div>
);

export default logo;
