import React from "react";

import { Loader, Error } from "components";
import { ExchangeType } from "./ExchangeDetails.container";
import styles from "./ExchangeDetails.module.css";

interface PropTypes {
  isLoading: boolean;
  isError: boolean;
  exchange: ExchangeType | object;
}

const ExchangeDetails = ({
  isLoading,
  isError,
  exchange,
}: PropTypes): JSX.Element => {
  if (isLoading) {
    return (
      <div className={styles.loaderWrapperContainer}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.errorWrapperContainer}>
        <Error />
      </div>
    );
  }

  return (
    <div>
      {/* <header>Hello</header> */}
      <main>main h</main>
    </div>
  );
};

export default ExchangeDetails;
