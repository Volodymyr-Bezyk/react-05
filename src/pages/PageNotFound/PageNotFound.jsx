import { useNavigate } from 'react-router-dom';

import { Text, HomeBtn } from './PageNotFound.styled';
import Box from 'components/Box';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={4}>
      <Text>
        There is nothing here. You can visit the main, please press the button
      </Text>
      <HomeBtn type="button" onClick={() => navigate('/', { replace: true })}>
        Go to Home Page
      </HomeBtn>
    </Box>
  );
};

export default PageNotFound;
