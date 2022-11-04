import axios from 'axios';

const API_KEY = '7254cc1ad31c69d2a534e79f9d285c60';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrendingFilms(abort) {
  const filmsPath = `/3/trending/movie/day`;
  const films = await axios.get(filmsPath, {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
  return films.data.results;
}

export async function getFilmById(movieId, abort) {
  const filmPath = `/3/movie/${movieId}`;
  const filmInfo = await axios.get(filmPath, {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
  return filmInfo.data;
}

export async function getFilmCredits(movieId, abort) {
  const filmPath = `/3/movie/${movieId}/credits`;
  const filmInfo = await axios.get(filmPath, {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
  return filmInfo.data.cast;
}

export async function getFilmReviews(movieId, abort) {
  const filmPath = `/3/movie/${movieId}/reviews`;
  const filmInfo = await axios.get(filmPath, {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
  return filmInfo.data.results;
}

export async function searchMoviesByName(movieName, page, abort) {
  const filmPath = `/3/search/movie`;
  const filmInfo = await axios.get(filmPath, {
    signal: abort.signal,
    params: { api_key: API_KEY, query: movieName, page: page },
  });
  return filmInfo.data;
}
