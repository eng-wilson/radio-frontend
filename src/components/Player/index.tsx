import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const Player: React.FC = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId='8nXqcugV2Y4' opts={opts} onReady={onPlayerReady} />;
};

export default Player;
