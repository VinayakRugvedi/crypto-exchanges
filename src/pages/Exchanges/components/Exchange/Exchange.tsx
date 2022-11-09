import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Avatar } from "components";
import styles from "./Exchange.module.css";

interface PropTypes {
  id: string;
  name?: string;
  country?: string;
  url?: string;
  imageUrl?: string;
  trustScore?: number;
  trustRank?: number;
  yearEstablished?: number;
}

const Exchange = ({
  id,
  name,
  country,
  url,
  imageUrl,
  trustScore,
  trustRank,
  yearEstablished,
}: PropTypes): JSX.Element => {
  return (
    <div className={styles.exchangeDetailsContainer}>
      <div className={styles.subHeaderContainer}>
        <div className={styles.avatarContainer}>
          <Avatar imageUrl={imageUrl} alt={name} />
        </div>
        <div className={styles.subHeaderDetails}>
          <h4 className={styles.subHeaderText} data-cy="exchange-name">
            {name}
          </h4>
          <p className={styles.subHeaderDescription}>
            Est. {yearEstablished}&nbsp;
            {country ? <>, {country.toUpperCase()}</> : null}
          </p>
        </div>
      </div>

      <div className={styles.trustContainer}>
        <span>Rank: {trustRank}</span>
        <span>Score: {trustScore} / 10</span>
      </div>

      <div className={styles.linksContainer}>
        <a
          href={url}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          data-cy="exchange-external-link"
        >
          Exchange&nbsp;&nbsp;
          <span>
            <FaExternalLinkAlt />
          </span>
        </a>
        <Link
          to={`/exchanges/${id}`}
          state="hello"
          className={styles.link}
          data-cy="exchange-internal-link"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Exchange;
