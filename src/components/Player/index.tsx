import { useCallback, useContext, useEffect, useState } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

import { Container } from './styles';

interface PlayerProps {
  videoId: string;
  startAt: number;
}

const Player = ({ videoId, startAt }: PlayerProps) => {
  const [player, setPlayer] = useState<YouTubeEvent>();

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event);
    event.target.playVideo();
  };

  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    // console.log(event.)
    switch (event.data) {
      case 0:
        // socket.emit('next');
        break;
      case 2:
        player?.target.playVideo();
        break;
      default:
        break;
    }
  };

  const play = useCallback(() => {
    player?.target.playVideo();
  }, []);

  const pause = useCallback(() => {
    player?.target.pauseVideo();
  }, []);

  const opts: YouTubeProps['opts'] = {
    height: '500',
    width: '500',
    playerVars: {
      autoplay: 1,
      start: startAt,
    },
  };

  useEffect(() => {
    play();
  }, [videoId]);

  return (
    <Container>
      {videoId ? (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={handleStateChange}
        />
      ) : null}
    </Container>
  );
};

export default Player;
