import React from "react";

import { SizeTypes } from "types";
import styles from "./Avatar.module.css";

interface PropTypes {
  imageUrl?: string;
  alt?: string;
  size?: string;
}

const Avatar = ({
  imageUrl,
  alt = "avatar",
  size = SizeTypes.Small,
}: PropTypes): JSX.Element => {
  return (
    <img
      className={`${styles.avatar} ${styles[size]}`}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default Avatar;
