import React, { useContext, useEffect, useState } from 'react';
import Chat from '../../components/Chat';
import Modal from '../../components/Modal';
import Player from '../../components/Player';

import { SocketContext } from '../../services/socket';

import { Container } from './styles';

const Home: React.FC = () => {
  const socket = useContext(SocketContext);
  const [videoId, setVideoId] = useState('');
  const [videoTimer, setVideoTimer] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = () => {
    setOpenModal((value) => !value);
  };

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

  return (
    <Container>
      <Modal modalIsOpen={openModal} closeModal={toggleModal} />
      <Player videoId={videoId} startAt={videoTimer} />
      <Chat />
    </Container>
  );
};

export default Home;
