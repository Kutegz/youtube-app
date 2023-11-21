import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const apiKey = process.env.REACT_APP_RAPID_KEY;

// if (!apiKey) {
//   throw new Error('REACT_APP_RAPID_KEY is not defined');
// }

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
    order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': '67743bbc5amshf4297390b7f16b6p159094jsn647d012e3731',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
