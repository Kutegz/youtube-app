import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { ChannelCard, Videos } from '../../common/exports';
import { ChannelResponse } from '../models/responses/channelResponse';
import { VideoResponse } from '../../videos/models/responses/videoResponse';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<ChannelResponse>();
  const [videos, setVideos] = useState<VideoResponse[]>([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,id&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206, 3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '100px',
          }}
        ></div>
        <ChannelCard channelDetails={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} direction="row" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
