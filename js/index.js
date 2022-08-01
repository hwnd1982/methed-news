import { API_KEY, URL } from "./modules/const.js";

const getNews = async () => {
  try {
    const response = await fetch(URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

(async () => await getNews())();