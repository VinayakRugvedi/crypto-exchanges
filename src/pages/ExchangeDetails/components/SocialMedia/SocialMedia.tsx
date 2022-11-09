import React from "react";

import { SocialMediaHandle } from "components";
import { SocialMediaTypes } from "types";
import styles from "./SocialMedia.module.css";

interface PropTypes {
  facebookUrl: string;
  slackUrl: string;
  telegramUrl: string;
  redditUrl: string;
  twitterHandle: string;
}

const SocialMedia = ({
  facebookUrl,
  slackUrl,
  telegramUrl,
  redditUrl,
  twitterHandle,
}: PropTypes): JSX.Element | null => {
  const socialMediaHandlesContent = [];
  const twitterUrl =
    twitterHandle && twitterHandle.length > 0
      ? `https://twitter.com/${twitterHandle}`
      : "";

  if (facebookUrl && facebookUrl.length > 0) {
    socialMediaHandlesContent.push(
      <div className={styles.handleContainer}>
        <SocialMediaHandle url={facebookUrl} type={SocialMediaTypes.Facebook} />
      </div>,
    );
  }

  if (twitterUrl && twitterUrl.length > 0) {
    socialMediaHandlesContent.push(
      <div className={styles.handleContainer}>
        <SocialMediaHandle url={twitterUrl} type={SocialMediaTypes.Twitter} />
      </div>,
    );
  }

  if (slackUrl && slackUrl.length > 0) {
    socialMediaHandlesContent.push(
      <div className={styles.handleContainer}>
        <SocialMediaHandle url={slackUrl} type={SocialMediaTypes.Slack} />
      </div>,
    );
  }

  if (redditUrl && redditUrl.length > 0) {
    socialMediaHandlesContent.push(
      <div className={styles.handleContainer}>
        <SocialMediaHandle url={redditUrl} type={SocialMediaTypes.Reddit} />
      </div>,
    );
  }

  if (telegramUrl && telegramUrl.length > 0) {
    socialMediaHandlesContent.push(
      <div className={styles.handleContainer}>
        <SocialMediaHandle url={telegramUrl} type={SocialMediaTypes.Telegram} />
      </div>,
    );
  }

  if (socialMediaHandlesContent.length === 0) return null;

  return (
    <div className={styles.handlesContainer}>{socialMediaHandlesContent}</div>
  );
};

export default SocialMedia;
