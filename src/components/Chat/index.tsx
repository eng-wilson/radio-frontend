import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { SocketContext } from '../../services/socket';

import {
  Container,
  HistoryContainer,
  Input,
  InputContainer,
  ListItem,
  Nickname,
  Submit,
} from './styles';

type MessageProps = {
  username: string;
  body: string;
  color: string;
};

const Chat: React.FC = () => {
  const { colors } = useTheme();
  const messagesEndRef = useRef<null | HTMLLIElement>(null);
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);

  const randomColor = function (colors: any) {
    var keys = Object.keys(colors);
    return colors[keys[(keys.length * Math.random()) << 0]];
  };

  const handleSendMessage = (e: any) => {
    const messageColor = randomColor(colors);

    if (body !== '' && username !== '') {
      socket.emit('message', { username, body, color: messageColor });

      setBody('');
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

      <InputContainer onSubmit={handleSendMessage}>
        <Input
          type='text'
          name='user'
          value={username}
          placeholder='Nickname'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type='text'
          name='message'
          value={body}
          placeholder='Message'
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <Submit type='submit'>Chat</Submit>
      </InputContainer>
    </Container>
  );
};

export default Chat;
