import React from "react";

import { BackLink } from "components";
import styles from "./NotFound.module.css";

const NotFound = (): JSX.Element => {
  return (
    <div className={styles.notFoundPageContainer}>
      <h1>Oops!</h1>
      <h2>Its 404 :-(</h2>
      <p>The page you are looking for does not exist.</p>
      <BackLink />
    </div>
  );
};

export default NotFound;
