import React from "react";

import { Loader, Error } from "components";
import styles from "./Exchanges.module.css";

interface PropTypes {
  isLoading: boolean;
  isError: boolean;
  exchanges: Array<object>;
}

const Exchanges = ({
  isLoading,
  isError,
  exchanges,
}: PropTypes): JSX.Element => {
  let mainContent: null | JSX.Element = null;

  if (isLoading) {
    mainContent = (
      <div className={styles.loaderWrapperContainer}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    mainContent = (
      <div className={styles.errorWrapperContainer}>
        <Error />
      </div>
    );
  }

  if (!isLoading && !isError) {
    // add exchange meta details to mainContent
  }

  return (
    <div className="exchanges-container">
      <header className="header-container">
        <h2 className={styles.headerText}>Cryptocurrency Exchanges</h2>
        <p className={styles.headerDescription}>
          You are viewing the directory of the first 10 cryptocurrency exchanges
        </p>
      </header>
      <main>{mainContent}</main>
    </div>
  );
};

export default Exchanges;
