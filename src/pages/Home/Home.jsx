import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'helpers/movieApi';
import MovieGalleryOnHomePage from 'components/MovieGalleryOnHomePage';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async function fetchFilms() {
      try {
        setIsLoading(true);
        const films = await getTrendingFilms(controller);
        setMovies(films);
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {isLoading && <Loader count={12} width={420} height={236} />}
      {!isLoading && <MovieGalleryOnHomePage movies={movies} />}
    </>
  );
};

export default Home;
