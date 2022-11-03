import { useLocation } from 'react-router-dom';
import { CardLink, Img, Title } from './MovieGalleryItemOnHomePage.styled';
import notFound from '../../images/notFound.png';

const MovieGalleryItemOnHomePage = ({ movie }) => {
  const location = useLocation();
  const { id, backdrop_path, title } = movie;

  return (
    <CardLink to={`movies/${id}`} state={{ from: location }}>
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

export default MovieGalleryItemOnHomePage;
