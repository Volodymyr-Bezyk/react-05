import Box from 'components/Box';
import { dateFormatter } from 'helpers/dateFormatter';
import { useLocation } from 'react-router-dom';
import noImage from '../../images/noImage.jpg';

import {
  Modal,
  ModalImg,
  TextWrap,
  FilmTitle,
  SubTitle,
  Text,
  Genre,
  AddLink,
} from './MovieModal.styled';

const MovieModal = ({ movie }) => {
  const location = useLocation();

  const {
    poster_path: poster,
    title,
    overview,
    genres,
    release_date: release,
    runtime,
  } = movie;
  return (
    <Box display="flex" justifyContent="center">
      <Modal>
        <Box display="flex">
          <ModalImg
            width="400"
            height="600"
            src={poster ? `https://image.tmdb.org/t/p/w400/${poster}` : noImage}
            alt={title}
          />

          <TextWrap>
            <FilmTitle>{title}</FilmTitle>
            <Text>Release date: {dateFormatter(release)}</Text>
            <Text>Runtime: {runtime} mins</Text>

            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
            <SubTitle>Genres:</SubTitle>
            <ul>
              {genres.map(({ name }, idx) => (
                <Genre key={idx}> {name}</Genre>
              ))}
            </ul>
            <SubTitle>Additional information</SubTitle>
            <div>
              <AddLink to="cast" end state={{ from: location.state?.from }}>
                Cast
              </AddLink>
              <AddLink to="reviews" end state={{ from: location.state?.from }}>
                Reviews
              </AddLink>
            </div>
          </TextWrap>
        </Box>
      </Modal>
    </Box>
  );
};

export default MovieModal;
