import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Title, AuthorName, Text, Wrap } from './Reviews.styled';
import { getFilmReviews } from 'helpers/movieApi';
import Box from 'components/Box';
import { dateFormatter } from 'helpers/dateFormatter';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    (async function getReviews() {
      try {
        setIsLoading(true);
        const result = await getFilmReviews(movieId, controller);
        setReviews(result);
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
        <Title>Reviews</Title>
        {isLoading && <Loader count={2} width={750} height={150} />}

        {!isLoading && reviews.length > 0 && (
          <ul>
            {reviews.map(({ id, author, content, updated_at: date }) => (
              <li key={id}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AuthorName>Author: {author}</AuthorName>
                  <p>
                    <b>Added:</b> <i>{dateFormatter(date)}</i>
                  </p>
                </Box>
                <Text>{content}</Text>
              </li>
            ))}
          </ul>
        )}

        {!isLoading && reviews.length === 0 && (
          <AuthorName>No reviews yet</AuthorName>
        )}
      </Wrap>
    </Box>
  );
};

export default Reviews;
