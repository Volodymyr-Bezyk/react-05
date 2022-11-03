import Box from 'components/Box';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  return (
    <Box p={3} gridGap={6}>
      {Array(props.count)
        .fill(0)
        .map((item, idx) => (
          <ContentLoader
            key={idx}
            speed={2}
            width={500}
            height={281}
            viewBox="0 0 400 225"
            backgroundColor="#545454"
            foregroundColor="#f3f2f2"
            {...props}
          >
            <rect x="0" y="0" rx="0" ry="0" width="400" height="225" />
          </ContentLoader>
        ))}
    </Box>
  );
};

export default Loader;
