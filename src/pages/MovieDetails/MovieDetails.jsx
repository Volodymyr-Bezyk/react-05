import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'helpers/movieApi';
import { Backdrop, BackLink, LinkText } from './MovieDetails.styled';
import MovieModal from 'components/MovieModal';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    (async function getFilm() {
      try {
        setIsLoading(true);
        const result = await getFilmById(movieId, controller);
        setMovie(result);
      } catch {
        return;
      } finally {
        setIsLoading(false);
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
      {isLoading && <Loader width={750} height={600} />}
      {!isLoading && <MovieModal movie={movie} />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Backdrop>
  );
};

export default MovieDetails;
