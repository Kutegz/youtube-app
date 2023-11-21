import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from '../../common/exports';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { VideoResponse } from '../../videos/models/responses/videoResponse';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState<VideoResponse[]>([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} direction="row" />
    </Box>
  );
};

export default SearchFeed;
