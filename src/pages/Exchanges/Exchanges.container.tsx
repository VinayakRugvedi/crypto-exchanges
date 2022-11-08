import React, { useState, useEffect } from "react";

import { getExchanges } from "rest";
import Exchanges from "./Exchanges";

export interface ExchangeType {
  id: string;
  name?: string;
  country?: string;
  url?: string;
  image?: string;
  trust_score_rank?: number;
  trust_score?: number;
  year_established?: number;
}

const ExchangesContainer = (): JSX.Element => {
  const [exchanges, setExchanges] = useState<Array<ExchangeType>>([]);
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
