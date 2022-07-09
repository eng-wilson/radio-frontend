import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Chat from '../../components/Chat';
import Player from '../../components/Player';
import { useNickname } from '../../hooks/useNickname';

import { SocketContext } from '../../services/socket';

import {
  ContactContainer,
  Container,
  GithubIcon,
  LinkedinIcon,
} from './styles';

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

        <ContactContainer>
          By Wilson Carvalho
          <a
            href='https://www.linkedin.com/in/dev-wilson/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedinIcon />
          </a>
          <a
            href='https://github.com/eng-wilson'
            target='_blank'
            rel='noreferrer'
          >
            <GithubIcon />
          </a>
        </ContactContainer>
      </Container>
    </>
  );
};

export default Home;
