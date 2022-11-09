import React from "react";

import { Loader, Error } from "components";
import { ExchangeType } from "./ExchangeDetails.container";
import Header from "./components/Header";
import styles from "./ExchangeDetails.module.css";

interface PropTypes {
  isLoading: boolean;
  isError: boolean;
  exchange: ExchangeType;
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
      <Header
        name={exchange.name}
        url={exchange.url}
        imageUrl={exchange.image}
        country={exchange.country}
        yearEstablished={exchange.year_established}
      />
      <main>
        <section>trust details</section>
        <section>Social Media</section>
        <section className={styles.descriptionSectionContainer}>
          <h3 className={styles.descriptionHeaderText}>Description</h3>
          <p className={styles.descriptionContent}>
            {exchange.description ? exchange.description : "N/A"}
          </p>
        </section>
      </main>
    </div>
  );
};

export default ExchangeDetails;
