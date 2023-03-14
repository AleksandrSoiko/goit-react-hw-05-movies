import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6a9443e9560321a4e46f64bd6f702be3';
// const IMAGE = 'https://image.tmdb.org/t/p/w400/';

export const fetchMoviesByKeyword = async (query, page) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return response.data;
};

export const fetchMovieDetailsInfo = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieActorDetails = async movieId => {
  const response = await axios.get(`
movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
  return response.data;
};

export const fetchMovieReviews = async (movieId, page) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`
  );
  return response.data;
};
