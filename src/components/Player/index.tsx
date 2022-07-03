import { useCallback, useEffect, useState } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

interface PlayerProps {
  videoId: string;
}

const Player = ({ videoId }: PlayerProps) => {
  const [player, setPlayer] = useState<YouTubeEvent>();

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event);
    event.target.playVideo();
  };

  const handleStateChange: YouTubeProps['onStateChange'] = (event) => {
    console.log(event);
  };

  const play = useCallback(() => {
    player?.target.playVideo();
  }, [player?.target]);

  const pause = () => {
    player?.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '500',
    width: '500',
    playerVars: {
      autoplay: 1,
    },
  };

  // useEffect(() => {
  //   play();
  // }, [play, videoId]);

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        // onStateChange={handleStateChange}
      />
      <button onClick={() => play()}>Play</button>
      <button onClick={() => pause()}>Pause</button>
    </div>
  );
};

export default Player;
