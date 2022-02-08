import React from "react";

import Navbar from "../Navbar/Navbar";

import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
