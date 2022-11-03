import { MovieList, MovieListItem } from './MovieGalleryOnHomePage.styled';
import MovieGalleryItemOnHomePage from 'components/MovieGalleryItemOnHomePage';

const MovieGalleryOnHomePage = ({ movies }) => {
  return (
    <>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <MovieGalleryItemOnHomePage movie={movie} />
            </MovieListItem>
          ))}
        </MovieList>
      )}
    </>
  );
};

export default MovieGalleryOnHomePage;
