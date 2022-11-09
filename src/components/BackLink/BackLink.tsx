import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./BackLink.module.css";

interface PropTypes {
  text?: string;
  link?: string;
}

const BackLink = ({
  text = "Back to main page",
  link = "/",
}: PropTypes): JSX.Element => {
  return (
    <Link className={styles.backLink} to={link} data-cy="back-link">
      <span className={styles.backIcon}>
        <FaLongArrowAltLeft />
      </span>
      &nbsp;&nbsp;
      <span>{text}</span>
    </Link>
  );
};

export default BackLink;
