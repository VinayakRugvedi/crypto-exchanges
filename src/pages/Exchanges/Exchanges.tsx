import React from "react";

import { Loader, Error } from "components";
import Exchange from "./components/Exchange";
import { ExchangeType } from "./Exchanges.container";
import styles from "./Exchanges.module.css";

interface PropTypes {
  isLoading: boolean;
  isError: boolean;
  exchanges: Array<ExchangeType>;
}

const Exchanges = ({
  isLoading,
  isError,
  exchanges,
}: PropTypes): JSX.Element => {
  let mainContent: JSX.Element = (
    <div className={styles.loaderWrapperContainer}>
      <Loader />
    </div>
  );

  if (isError) {
    mainContent = (
      <div className={styles.errorWrapperContainer}>
        <Error />
      </div>
    );
  }

  if (!isLoading && !isError) {
    const exchangesContent: Array<JSX.Element> = [];
    exchanges.map((exchange) => {
      exchangesContent.push(
        <div key={exchange.id} data-cy="exchange-component-holder">
          <Exchange
            id={exchange.id}
            name={exchange.name}
            country={exchange.country}
            url={exchange.url}
            imageUrl={exchange.image}
            trustScore={exchange.trust_score}
            trustRank={exchange.trust_score_rank}
            yearEstablished={exchange.year_established}
          />
        </div>,
      );
    });

    mainContent = (
      <div
        className={styles.exchangesWrapperContainer}
        data-cy="exchanges-holder"
      >
        {exchangesContent}
      </div>
    );
  }

  return (
    <div>
      <header>
        <h2 className={styles.headerText} data-cy="page-title-text">
          Cryptocurrency Exchanges
        </h2>
        <p className={styles.headerDescription}>
          You are viewing the directory of the first 10 cryptocurrency exchanges
        </p>
      </header>
      <main>{mainContent}</main>
    </div>
  );
};

export default Exchanges;
