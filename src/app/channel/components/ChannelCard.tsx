import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../../utils/constants';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { ChannelResponse } from '../models/responses/channelResponse';

type ChannelCardProps = {
  channelDetails: ChannelResponse | undefined;
};
const ChannelCard = ({ channelDetails }: ChannelCardProps) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: '-110px',
      }}
    >
      <Link to={`/channel/${channelDetails?.id}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFF',
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography color="gray">
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
