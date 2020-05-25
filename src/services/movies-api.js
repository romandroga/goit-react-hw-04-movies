import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=9f43f0d8c068c383c7f704d76ec83842
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9f43f0d8c068c383c7f704d76ec83842';

export const fetchMovieById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  return results;
};

export const fetchMoviesByName = async name => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`,
  );
  // Вернет ответ с общим количеством совпадений. Можно сделать пагинацию
  return data;
};

export const fetchMoviePoster = (width, path) =>
  axios.get(`https://image.tmdb.org/t/p/w${width}/${path}`);

export const fetchMovieCredits = id =>
  axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
// trending/movie/week
// search/movie?api_key=<<api_key>>&language=en-US&query=Batman&page=1&include_adult=false
// https://image.tmdb.org/t/p/original/
