import Box from 'components/Box';
import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  return (
    <Box
      pt={3}
      pr={3}
      pl={3}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      as="ul"
      gridGap={props.gap ?? 3}
    >
      {Array(props.count)
        .fill(0)
        .map((item, idx) => (
          <Box as="li" key={idx}>
            <ContentLoader
              speed={2}
              backgroundColor="#545454"
              foregroundColor="#f3f2f2"
              {...props}
            >
              <rect
                x="0"
                y="0"
                rx="0"
                ry="0"
                width={props.width}
                height={props.height}
              />
            </ContentLoader>
          </Box>
        ))}
    </Box>
  );
};

export default Loader;
