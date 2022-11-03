import { useLocation } from 'react-router-dom';
import { CardLink, Img, Title } from './MovieGalleryItemOnMoviesPage.styled';
import notFound from '../../images/notFound.png';

const MovieGalleryItemOnMoviesPage = ({ movie }) => {
  const { id, backdrop_path, title } = movie;
  const location = useLocation();

  return (
    <CardLink to={`${id}`} state={{ from: location }}>
      <Img
        width="500"
        height="281"
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : notFound
        }
        alt={title}
      ></Img>
      <Title>{title}</Title>
    </CardLink>
  );
};

export default MovieGalleryItemOnMoviesPage;
