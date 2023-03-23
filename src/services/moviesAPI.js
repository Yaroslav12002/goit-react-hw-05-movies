import axios from 'axios';

const API_KEY = 'b2b9595202d4f988a1c6d3c8319aadf9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint, param) => {
  let query = '';
  if (param) {
    query = `&query=${param}`;
  }
  try {
    const response = await axios.get(`${endpoint}?api_key=${API_KEY}${query}`);
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
};

export const getMoviesTrends = () => {
  const path = '/trending/movie/day';
  return fetchMovies(path, '');
};

export const getMoviesByQuery = param => {
  const path = '/search/movie';
  return fetchMovies(path, param);
};

export const getMovieById = id => {
  const path = `/movie/${id}`;
  return fetchMovies(path);
};

export const getMovieCast = id => {
  const path = `/movie/${id}/credits`;
  return fetchMovies(path);
};

export const getMovieReview = id => {
  const path = `/movie/${id}/reviews`;
  return fetchMovies(path);
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
