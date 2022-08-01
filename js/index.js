import { URL_API, token } from "./modules/const.js";

const getNews = async () => {
  try {
    const response = await fetch(URL_API, {
      headers: {
        Authorization: `bearer ${token}`
      },
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

(async () => await getNews())();