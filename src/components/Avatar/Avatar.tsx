import React from "react";

import styles from "./Avatar.module.css";

interface PropTypes {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: PropTypes): JSX.Element => {
  return <img className={styles.avatar} src={imageUrl} alt={alt} />;
};

export default Avatar;
