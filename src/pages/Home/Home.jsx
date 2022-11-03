import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'helpers/movieApi';
import MovieGalleryOnHomePage from 'components/MovieGalleryOnHomePage';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    (async function fetchFilms() {
      try {
        const films = await getTrendingFilms(controller);
        setMovies(films);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return <MovieGalleryOnHomePage movies={movies} />;
};

export default Home;
