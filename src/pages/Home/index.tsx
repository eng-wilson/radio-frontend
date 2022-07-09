import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Chat from '../../components/Chat';
import Player from '../../components/Player';
import { useNickname } from '../../hooks/useNickname';

import { SocketContext } from '../../services/socket';

import { Container } from './styles';

const Home: React.FC = () => {
  const socket = useContext(SocketContext);
  const { nickname } = useNickname();
  const [videoId, setVideoId] = useState('');
  const [videoTimer, setVideoTimer] = useState(0);

  useEffect(() => {
    socket.on('nowPlaying', (id, timer) => {
      if (timer) {
        setVideoTimer(timer);
      } else {
        setVideoTimer(0);
      }
      setVideoId(id);
    });
  }, [socket]);

  useEffect(() => {
    if (nickname) {
      toast.dark(`Welcome, ${nickname}!`);
    }
  }, [nickname]);

  return (
    <>
      <ToastContainer />
      <Container>
        <Player videoId={videoId} startAt={videoTimer} />
        <Chat />
      </Container>
    </>
  );
};

export default Home;
