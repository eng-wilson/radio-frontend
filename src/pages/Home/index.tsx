import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../services/socket';

type MessageProps = {
  username: string;
  body: string;
};

const Home: React.FC = () => {
  const socket = useContext(SocketContext);

  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);

  const handleSendMessage = () => {
    socket.emit('message', { username, body });
  };

  useEffect(() => {
    socket.on('message', (history) => {
      setChatHistory(history);
    });
  }, [socket]);

  return (
    <div>
      <input
        type='text'
        name='user'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type='text'
        name='message'
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={() => handleSendMessage()}>Send</button>

      <ul>
        {chatHistory.map((message) => (
          <li>{`${message.username}: ${message.body}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
