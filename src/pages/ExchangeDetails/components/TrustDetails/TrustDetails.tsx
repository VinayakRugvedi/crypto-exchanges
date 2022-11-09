import React from "react";

import styles from "./TrustDetails.module.css";

interface PropTypes {
  trustRank: number;
  trustScore: number;
}

const TrustDetails = ({ trustRank, trustScore }: PropTypes): JSX.Element => {
  return (
    <div className={styles.trustDetailsContainer}>
      <div className={styles.trustBlock}>
        <h6 className={styles.trustHeaderText}>Trust Rank</h6>
        <p className={styles.trustValue}>{trustRank}</p>
      </div>

      <div className={styles.trustBlock}>
        <h6 className={styles.trustHeaderText}>Trust Score</h6>
        <p className={styles.trustValue}>{trustScore} / 10</p>
      </div>
    </div>
  );
};

export default TrustDetails;
