import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'helpers/movieApi';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Box from 'components/Box';
import SearchBar from 'components/SearchBar';
import MovieGalleryOnMoviesPage from 'components/MovieGalleryOnMoviesPage';
import Loader from 'components/Loader/Loader';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    const controller = new AbortController();

    if (!movieName) return;
    (async function searchMovies() {
      try {
        setIsLoading(true);
        const result = await searchMoviesByName(movieName, controller);
        setMovies(result.results);

        if (result.results.length === 0) {
          toast.error(
            `Nothing found for your query ${movieName.toUpperCase()}`
          );

          return;
        }
        toast.success(`Successfully found ${movieName.toUpperCase()}`);
      } catch {
        return;
      } finally {
        setIsLoading(false);
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
      {isLoading && <Loader count={12} width={420} height={236} />}
      {!isLoading && <MovieGalleryOnMoviesPage movies={movies} />}
    </div>
  );
};

export default Movies;
