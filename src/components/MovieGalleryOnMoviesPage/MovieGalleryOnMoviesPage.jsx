import { MovieList, MovieListItem } from './MovieGalleryOnMoviesPage.styled';
import MovieGalleryItemOnMoviesPage from 'components/MovieGalleryItemOnMoviesPage';

const MovieGalleryOnMoviesPage = ({ movies }) => {
  return (
    <>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <MovieGalleryItemOnMoviesPage movie={movie} />
            </MovieListItem>
          ))}
        </MovieList>
      )}
    </>
  );
};

export default MovieGalleryOnMoviesPage;
