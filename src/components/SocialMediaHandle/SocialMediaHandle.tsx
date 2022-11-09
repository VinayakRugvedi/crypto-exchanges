import React from "react";
import { FaFacebook, FaReddit, FaTelegram } from "react-icons/fa";
import { AiFillSlackCircle, AiFillTwitterCircle } from "react-icons/ai";

import { SocialMediaTypes } from "types";
import styles from "./SocialMediaHandle.module.css";

interface PropTypes {
  url: string;
  type: string;
}

const SocialMediaHandle = ({ url, type }: PropTypes): JSX.Element => {
  let SocialIcon = null;
  if (type === SocialMediaTypes.Facebook) SocialIcon = FaFacebook;
  else if (type === SocialMediaTypes.Twitter) SocialIcon = AiFillTwitterCircle;
  else if (type === SocialMediaTypes.Slack) SocialIcon = AiFillSlackCircle;
  else if (type === SocialMediaTypes.Reddit) SocialIcon = FaReddit;
  else SocialIcon = FaTelegram;

  return (
    <a
      href={url}
      target="_blank"
      className={`${styles.link} ${styles[type]}`}
      rel="noreferrer"
      data-cy="social-media-link"
    >
      <SocialIcon />
    </a>
  );
};

export default SocialMediaHandle;
