import React from "react";

import { Loader, Error } from "components";
import { ExchangeType } from "./ExchangeDetails.container";
import Header from "./components/Header";
import TrustDetails from "./components/TrustDetails";
import SocialMedia from "./components/SocialMedia";
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
        <section className={styles.sectionContainer}>
          <TrustDetails
            trustRank={exchange.trust_score_rank}
            trustScore={exchange.trust_score}
          />
        </section>
        <section className={styles.sectionContainer}>
          <SocialMedia
            facebookUrl={exchange.facebook_url}
            slackUrl={exchange.slack_url}
            telegramUrl={exchange.telegram_url}
            redditUrl={exchange.reddit_url}
            twitterHandle={exchange.twitter_handle}
          />
        </section>
        <section className={styles.sectionContainer}>
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
