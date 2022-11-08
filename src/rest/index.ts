const ROOT_URL = "https://api.coingecko.com/api/v3/";

const endpoints = {
  Exchanges: "exchanges",
};

/*
  We could use 'humps' library to ensure the keys of the response are
  converted to camelCase form kebab_case to maintain consistent
  coding conventions throughout frontend
*/

// We can replace fetch with axios

const getExchanges = (perPage = 10) => {
  const finalUrl = `${ROOT_URL}${endpoints.Exchanges}?per_page=${perPage}`;
  return fetch(finalUrl, {
    method: "GET",
  });
};

const getExchangeDetails = (id: string | undefined) => {
  const finalUrl = `${ROOT_URL}${endpoints.Exchanges}/${id ? id : ""}`;
  return fetch(finalUrl, {
    method: "GET",
  });
};

export { getExchanges, getExchangeDetails };
