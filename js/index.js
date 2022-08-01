import { API_KEY, REQUEST_URL } from "./modules/const.js";

const getNews = async () => {
  try {
    const response = await fetch(REQUEST_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

(async () => await getNews())();