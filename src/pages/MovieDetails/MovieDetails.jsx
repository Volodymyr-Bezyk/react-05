import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'helpers/movieApi';
import { Backdrop, BackLink, LinkText } from './MovieDetails.styled';
import MovieModal from 'components/MovieModal';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    (async function getFilm() {
      try {
        const result = await getFilmById(movieId, controller);
        setMovie(result);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movie) return;
  return (
    <Backdrop>
      <BackLink to={backLinkHref}>
        <BiArrowBack size={20} strokeWidth={1} display="block"></BiArrowBack>
        <LinkText>Go back</LinkText>
      </BackLink>
      <MovieModal movie={movie} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Backdrop>
  );
};

export default MovieDetails;
