import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Avatar, BackLink } from "components";
import { SizeTypes } from "types";
import styles from "./Header.module.css";

interface PropTypes {
  name: string;
  country?: string;
  url: string;
  imageUrl: string;
  yearEstablished: number;
}

const Header = ({
  name,
  url,
  imageUrl,
  country = "",
  yearEstablished,
}: PropTypes): JSX.Element => {
  const isCountryPresent = country && country.length > 0 ? true : false;

  return (
    <header>
      <BackLink />

      <div className={styles.detailsContainer}>
        <div className={styles.avatarContainer}>
          <Avatar imageUrl={imageUrl} alt={name} size={SizeTypes.Medium} />
        </div>
        <div>
          <h4 className={styles.name} data-cy="exchange-name">
            {name}
          </h4>
          <a
            href={url}
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            Visit Exchange&nbsp;&nbsp;
            <span>
              <FaExternalLinkAlt />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.originDetailsContainer}>
        {isCountryPresent ? (
          <p>
            From {country.toUpperCase()}, established in the year{" "}
            {yearEstablished ? yearEstablished : "N/A"}
          </p>
        ) : (
          <p>
            Established in the year {yearEstablished ? yearEstablished : "N/A"}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
