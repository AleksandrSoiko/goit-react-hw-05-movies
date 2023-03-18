import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6a9443e9560321a4e46f64bd6f702be3';

export const fetchMoviesByKeyword = async (query, page, abortSettings) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
      abortSettings
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailsInfo = async (movieId, abortSettings) => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${KEY}&language=en-US`,
      abortSettings
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieActorDetails = async (movieId, abortSettings) => {
  try {
    const response = await axios.get(
      `
movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
      abortSettings
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (movieId, abortController) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
      abortController
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async (page, abortController) => {
  try {
    const response = await axios.get(
      `trending/movie/day?api_key=${KEY}&page=${page}`,
      abortController
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
