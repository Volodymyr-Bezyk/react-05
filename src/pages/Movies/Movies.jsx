import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'helpers/movieApi';
import { useState, useEffect } from 'react';
import Box from 'components/Box';
import SearchBar from 'components/SearchBar';
import MovieGalleryOnMoviesPage from 'components/MovieGalleryOnMoviesPage';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    const controller = new AbortController();

    if (!movieName) return;
    (async function searchMovies() {
      try {
        const result = await searchMoviesByName(movieName, controller);
        if (result.length === 0) {
          setMovies([]);
        }
        setMovies(result.results);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieName]);

  return (
    <div>
      <Box p={4}>
        <SearchBar setSearchParams={setSearchParams} />
      </Box>
      <MovieGalleryOnMoviesPage movies={movies} />
    </div>
  );
};

export default Movies;
