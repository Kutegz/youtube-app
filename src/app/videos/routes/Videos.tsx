import { Box, Stack } from '@mui/material';
import { VideoCard } from '../../common/exports';
import { ResponsiveStyleValue } from '@mui/system';
import { VideoResponse } from '../models/responses/videoResponse';

type VideosProps = {
  videos: VideoResponse[];
  direction:
    | ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>
    | undefined;
};

const Videos = ({ videos, direction }: VideosProps) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, idx) => (
        <Box key={idx}>{video.id.videoId && <VideoCard video={video} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
