import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCredits } from 'helpers/movieApi';
import {
  Wrap,
  SubTitle,
  ListItem,
  ActorImg,
  Text,
  TextBold,
} from './Cast.styled';
import Box from 'components/Box';
import defaultImage from '../../images/notAvailible.png';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    (async function getActors() {
      try {
        const result = await getFilmCredits(movieId, controller);
        setActors(result);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Box display="flex" justifyContent="center">
      <Wrap>
        <SubTitle>Actors:</SubTitle>

        <Box as="ul" display="flex" flexWrap="wrap" p={3}>
          {actors.map(({ id, profile_path, name, character }) => (
            <ListItem key={id}>
              <ActorImg
                width="200"
                height="300"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : defaultImage
                }
                alt={name}
              />
              <Box width="200px">
                <TextBold>Name: {name}</TextBold>
                <Text>Character:</Text>
                <TextBold> {character}</TextBold>
              </Box>
            </ListItem>
          ))}
        </Box>
      </Wrap>
    </Box>
  );
};

export default Cast;

<div></div>;
