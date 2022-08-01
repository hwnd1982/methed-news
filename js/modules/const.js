export const PROXY_URL = "https://cors-anywhere.herokuapp.com/"
export const API_KEY = "cd7d3eb315884c16bb59a54361900b33";
export const RU = `ru`;
export const URL = `${PROXY_URL}https://newsapi.org/v2/top-headlines?country=${RU}&apiKey=${API_KEY}`;
export const REQUEST_URL = new Request(URL);

