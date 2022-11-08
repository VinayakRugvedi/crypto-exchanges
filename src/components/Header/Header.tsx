import React from "react";

import Logo from "assets/logo.svg";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.rootHeaderContainer}>
      <div>
        <img className={styles.headerLogo} src={Logo} alt="Logo" />
      </div>
      <h4 className={styles.headerText}>Crypto.Exchanges</h4>
    </header>
  );
};

export default Header;
