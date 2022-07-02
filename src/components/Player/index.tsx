import React, { useState } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

const Player: React.FC = () => {
  const [player, setPlayer] = useState<YouTubeEvent>();

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event);
    event.target.playVideo();
  };

  const play = () => {
    player?.target.playVideo();
  };

  const pause = () => {
    player?.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId='8nXqcugV2Y4' opts={opts} onReady={onPlayerReady} />
      <button onClick={() => play()}>Play</button>
      <button onClick={() => pause()}>Pause</button>
    </div>
  );
};

export default Player;
