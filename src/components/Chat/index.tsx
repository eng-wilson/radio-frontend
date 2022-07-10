import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNickname } from '../../hooks/useNickname';
import { SocketContext } from '../../services/socket';
import Modal from '../Modal';

import {
  Container,
  HistoryContainer,
  Input,
  InputContainer,
  ListItem,
  Nickname,
  Submit,
  ActionButton,
} from './styles';

type MessageProps = {
  username: string;
  body: string;
  color: string;
};

type UserColor = {
  [user: string]: string;
};

const Chat = () => {
  const { colors } = useTheme();
  const messagesEndRef = useRef<null | HTMLLIElement>(null);
  const socket = useContext(SocketContext);
  const { nickname } = useNickname();
  const [body, setBody] = useState('');
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [userColor, setUserColor] = useState<UserColor>({});

  const toggleModal = () => {
    setOpenModal((value) => !value);
  };

  const randomColor = function (nickname: string) {
    if (userColor[nickname]) {
      return userColor[nickname];
    } else {
      const keys = Object.keys(colors) as Array<keyof typeof colors>;
      const color = colors[keys[(keys.length * Math.random()) << 0]];

      setUserColor({ ...userColor, [nickname]: color });

      return color;
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    if (nickname) {
      const messageColor = randomColor(nickname);
      if (body && nickname) {
        socket.emit('message', {
          username: nickname,
          body,
          color: messageColor,
        });

        setBody('');
      }
    } else {
      toggleModal();
    }
    e.preventDefault();
  };

  const scrollToBottom = () => {
    messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  };

  useEffect(() => {
    socket.on('message', (history) => {
      setChatHistory(history);
    });
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  return (
    <Container>
      <HistoryContainer>
        {chatHistory.map((message) => (
          <ListItem ref={messagesEndRef}>
            <Nickname color={message.color}>{message.username}</Nickname>
            {`: ${message.body}`}
          </ListItem>
        ))}
      </HistoryContainer>

      {nickname ? (
        <InputContainer onSubmit={handleSendMessage}>
          <Input
            name='message'
            value={body}
            placeholder='Message'
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          <Submit disabled={!body} type='submit'>
            Chat
          </Submit>
        </InputContainer>
      ) : (
        <ActionButton onClick={() => toggleModal()}>
          Set a username to chat
        </ActionButton>
      )}

      <Modal modalIsOpen={openModal} closeModal={toggleModal} />
    </Container>
  );
};

export default Chat;
