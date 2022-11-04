import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'helpers/movieApi';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Box from 'components/Box';
import SearchBar from 'components/SearchBar';
import MovieGalleryOnMoviesPage from 'components/MovieGalleryOnMoviesPage';
import Loader from 'components/Loader/Loader';
import PaginatedItems from 'components/Pagination';
import { useRef } from 'react';

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const page = searchParams.get('page');
  const [response, setResponse] = useState(null);

  const isRenderWithNewQuery = useRef(true);

  useEffect(() => {
    const controller = new AbortController();

    if (!movieName) return;
    (async function searchMovies() {
      try {
        setIsLoading(true);
        const result = await searchMoviesByName(movieName, page, controller);
        setResponse(result);

        if (result.results.length === 0) {
          toast.error(
            `Nothing found for your query ${movieName.toUpperCase()}`
          );
          return;
        }

        if (isRenderWithNewQuery.current) {
          toast.success(`Successfully found ${movieName.toUpperCase()}`);
          isRenderWithNewQuery.current = false;
        }
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieName, page]);

  return (
    <div>
      <Box p={4}>
        <SearchBar
          setSearchParams={setSearchParams}
          isRenderWithNewQuery={isRenderWithNewQuery}
        />
      </Box>
      {isLoading && <Loader count={12} width={420} height={236} />}

      {!isLoading && response && (
        <div>
          <MovieGalleryOnMoviesPage movies={response.results} />
          <PaginatedItems
            response={response}
            setSearchParams={setSearchParams}
            page={page}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
