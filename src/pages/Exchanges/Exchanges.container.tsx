import React, { useState, useEffect } from "react";

import { getExchanges } from "rest";
import Exchanges from "./Exchanges";

const ExchangesContainer = (): JSX.Element => {
  const [exchanges, setExchanges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getExchanges()
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((results) => {
        setExchanges(results);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Exchanges isLoading={isLoading} isError={isError} exchanges={exchanges} />
  );
};

export default ExchangesContainer;
