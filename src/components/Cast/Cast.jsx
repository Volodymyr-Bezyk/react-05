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
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    (async function getActors() {
      try {
        setIsLoading(true);
        const result = await getFilmCredits(movieId, controller);
        setActors(result);
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

  return (
    <Box display="flex" justifyContent="center">
      <Wrap>
        <SubTitle>Actors:</SubTitle>

        <Box as="ul" display="flex" flexWrap="wrap" p={3}>
          {isLoading && <Loader count={3} width={200} height={300} gap={4} />}
          {!isLoading &&
            actors.length > 0 &&
            actors.map(({ id, profile_path, name, character }) => (
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
          {isLoading && actors.length === 0 && (
            <TextBold> No photos yet</TextBold>
          )}
        </Box>
      </Wrap>
    </Box>
  );
};

export default Cast;

<div></div>;
