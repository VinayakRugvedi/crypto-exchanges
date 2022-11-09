import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getExchangeDetails } from "rest";
import ExchangeDetails from "./ExchangeDetails";

export interface ExchangeType {
  name: string;
  country: string;
  url: string;
  description: string;
  image: string;
  trust_score_rank: number;
  trust_score: number;
  year_established: number;
  facebook_url: string;
  slack_url: string;
  telegram_url: string;
  reddit_url: string;
  twitter_handle: string;
}

const ExchangeDetailsContainer = (): JSX.Element => {
  const [exchange, setExchange] = useState<ExchangeType>({} as ExchangeType);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { exchangeId } = useParams();

  useEffect(() => {
    if (!exchangeId) {
      return;
    }

    setIsLoading(true);
    getExchangeDetails(exchangeId)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        setExchange(result);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [exchangeId]);

  return (
    <ExchangeDetails
      isLoading={isLoading}
      isError={isError}
      exchange={exchange}
    />
  );
};

export default ExchangeDetailsContainer;
