const ROOT_URL = "https://api.coingecko.com/api/v3/";

const endpoints = {
  Exchanges: "exchanges",
};

const getExchanges = (perPage = 10) => {
  const finalUrl = `${ROOT_URL}${endpoints.Exchanges}?per_page=${perPage}`;
  return fetch(finalUrl, {
    method: "GET",
  });
};

const getExchangeDetails = (id: string) => {
  const finalUrl = `${ROOT_URL}${endpoints.Exchanges}/${id}`;
  return fetch(finalUrl, {
    method: "GET",
  });
};

export { getExchanges, getExchangeDetails };
