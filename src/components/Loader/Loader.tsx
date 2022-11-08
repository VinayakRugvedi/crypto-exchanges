import React from "react";

import styles from "./Loader.module.css";

interface PropTypes {
  loadingText?: string;
}

const Loader = ({
  loadingText = "Please wait for a while...",
}: PropTypes): JSX.Element => {
  return (
    <div className={styles.loaderContainer} aria-busy="true">
      <div className={styles.spinner}></div>
      <p className={styles.loaderText}>{loadingText}</p>
    </div>
  );
};

export default Loader;
