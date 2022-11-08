import React from "react";

import styles from "./Exchanges.module.css";

interface PropTypes {
  isLoading: boolean;
  isError: boolean;
  exchanges: Array<object>;
}

const Exchanges = ({
  isLoading,
  isError,
  exchanges,
}: PropTypes): JSX.Element => {
  return (
    <div className="exchanges-container">
      <header className="header-container">
        <h2>Cryptocurrency Exchanges</h2>
        <p>
          You are viewing the directory of the first 10 cryptocurrency exchanges
        </p>
      </header>
      <main>Main Content</main>
    </div>
  );
};

export default Exchanges;
