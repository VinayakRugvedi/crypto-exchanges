import React from "react";

import { FaExclamationTriangle } from "react-icons/fa";

import styles from "./Error.module.css";

interface PropTypes {
  errorText?: string;
}

const Error = ({
  errorText = "Oops! Something went wrong. Please try refreshing.",
}: PropTypes): JSX.Element => {
  return (
    <div
      className={styles.errorContainer}
      aria-invalid="true"
      aria-errormessage="error-text"
    >
      <div className={styles.errorIcon}>
        <FaExclamationTriangle />
      </div>
      <p id="error-text" className={styles.errorText}>
        {errorText}
      </p>
    </div>
  );
};

export default Error;
